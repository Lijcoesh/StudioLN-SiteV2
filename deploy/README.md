# Deploy naar de VPS

De site en de API draaien op de eigen VPS (TransIP, Ubuntu 26.04, `85.10.151.178`), naast WaterZacht, Kamerbreed en het dashboard. Caddy serveert de site op `studioln.nl` (HTTPS via Caddy, `www` verwijst door) en stuurt `/api` door naar de API op `127.0.0.1:5083`. De API ontvangt het contactformulier en mailt het via Brevo naar `contact@studioln.nl`; hij slaat niets op. Opgezet zoals Kamerbreed (`F:/Development/Kamerbreed-Interieur/deploy/README.md`).

Bij elke push naar `main` bouwt GitHub Actions ([deploy-vps.yml](../.github/workflows/deploy-vps.yml)) de site (eerst `npm run lint`) en de API (eerst `dotnet test`), zet ze met rsync op de VPS en herstart de API. Handmatig starten kan via Actions → Deploy to VPS → Run workflow.

**Namen:** alles heet `studioln-site`, niet `studioln`. `studioln.caddy`, `studioln-api`, `/var/www/studioln`, `/etc/studioln` en de gebruiker `studioln` zijn van het dashboard (`dashboard.studioln.nl`). Poorten: 5080 WaterZacht, 5081 dashboard, 5082 Kamerbreed, **5083 deze site**.

| Op de VPS | Wat |
|---|---|
| `/var/www/studioln-site/site/` | gebouwde frontend (`dist/`), eigenaar `deploy` |
| `/var/www/studioln-site/api/` | `dotnet publish` van `server/`, eigenaar `deploy` |
| `/etc/studioln-site/api.env` | secrets voor de API, alleen leesbaar voor root |
| `/etc/caddy/sites/studioln-site.caddy` | Caddy-config ([studioln-site.caddy](studioln-site.caddy)) |
| `/etc/systemd/system/studioln-site-api.service` | de API-service ([studioln-site-api.service](studioln-site-api.service)) |

Gebruikers: `deploy` (GitHub logt hiermee in, dezelfde als bij de andere sites) en `studioln-site` (draait de API, kan niet inloggen). Caddy, rsync, de .NET-runtime, de firewall, fail2ban en `deploy` zijn er al.

## Eenmalig instellen

Doe stap 1 tot en met 6 **voordat** je naar `main` pusht; anders faalt de workflow bij het herstarten van de API.

0. Snapshot maken in het TransIP-paneel.
1. Gebruiker en mappen:
   ```
   sudo useradd --system --no-create-home --shell /usr/sbin/nologin studioln-site
   sudo mkdir -p /var/www/studioln-site/site /var/www/studioln-site/api /etc/studioln-site
   sudo chown -R deploy:deploy /var/www/studioln-site
   ```
2. Secrets in `/etc/studioln-site/api.env` (`sudo nano`, daarna `sudo chmod 600`):
   ```
   Brevo__ApiKey=...
   Brevo__SenderEmail=noreply@studioln.nl
   ```
   Brevo: het gedeelde account, met een eigen API-key voor deze site (`studioln-site-api`). De afzender mag een `noreply@` zijn: het formulier vraagt altijd een e-mailadres, dus de mail heeft altijd de bezoeker als reply-to. Controleer in Brevo dat `studioln.nl` als afzenderdomein geverifieerd is (het dashboard gebruikt `noreply@studioln.nl` al). Om te testen kun je de ontvanger in `api.env` overschrijven met `Mail__ContactMessageRecipient=<jouw adres>`.
3. Config: kopieer [studioln-site.caddy](studioln-site.caddy) naar `/etc/caddy/sites/` en [studioln-site-api.service](studioln-site-api.service) naar `/etc/systemd/system/` (bv. met `scp` naar je home en dan `sudo mv`; plakken in nano vanuit Windows kan de regeleinden kapotmaken), dan:
   ```
   caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
   sudo systemctl daemon-reload
   sudo systemctl enable studioln-site-api
   ```
   Nog **niet** `reload caddy`: dat pas in stap 7, als de DNS goed staat.
4. `deploy` mag de service herstarten:
   ```
   echo 'deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart studioln-site-api' | sudo tee /etc/sudoers.d/deploy-studioln-site
   sudo chmod 440 /etc/sudoers.d/deploy-studioln-site
   ```
5. Poort 5083 blijft dicht in de firewall: de API luistert alleen op `127.0.0.1`.
6. GitHub-secrets in deze repo (Settings → Secrets and variables → Actions): `VPS_HOST` (het IP), `VPS_SSH_KEY` (de privé deploy-key van `deploy`, dezelfde als bij de andere sites) en `VPS_KNOWN_HOSTS` (uitvoer van `ssh-keyscan 85.10.151.178`). Daarna de workflow draaien (push of Run workflow).
7. DNS bij de registrar: A-records van `@` en `www` (`studioln.nl`) naar `85.10.151.178`. Laat het record van `dashboard` staan. Als het doorgekomen is:
   ```
   caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile && sudo systemctl reload caddy
   ```
   Caddy haalt dan zelf het certificaat.

Wijzig je later `studioln-site.caddy` of de service, kopieer hem dan opnieuw en doe `sudo systemctl reload caddy` of `sudo systemctl daemon-reload && sudo systemctl restart studioln-site-api`. De workflow kopieert alleen de site en de API.

Op de VPS draait Caddy 2.6.2 (het Ubuntu-pakket). Nieuwere syntax, zoals `handle_errors 404`, kent die niet. Herlaad alleen na een geslaagde validatie: een mislukte reload laat de oude config draaien, maar het kapotte bestand blijft op schijf staan, en bij een herstart van Caddy liggen dan **alle** sites op de VPS plat.

## Controleren

- Laatste deploy: tabblad Actions op GitHub.
- Site: `curl -I https://studioln.nl/` geeft `200`; `https://www.studioln.nl/` geeft een `301` naar de hoofdnaam; `https://studioln.nl/bestaat-niet` geeft `404`.
- API: `curl https://studioln.nl/api/health` geeft `Healthy`.
- Formulier: stuur een testbericht via `/contact` en kijk of het in `contact@studioln.nl` aankomt, met de bezoeker als reply-to.
- API-status: `systemctl status studioln-site-api`; logs: `journalctl -u studioln-site-api -n 50`. De API logt geen formulierinhoud of e-mailadressen.
