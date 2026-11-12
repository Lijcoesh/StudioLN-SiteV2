# Deploy naar de VPS

De site (studioln.nl) is statisch: er draait geen API of service bij. Caddy serveert `dist/`. Bij elke push naar `main` bouwt GitHub Actions ([deploy-vps.yml](../.github/workflows/deploy-vps.yml)) de site en zet hem met rsync op de VPS. Het contactformulier praat met de dashboard-API (`VITE_CONTACT_ENDPOINT`), niet met deze server. Zie ook [.claude/vps.md](../.claude/vps.md).

| Op de VPS | Wat |
|---|---|
| `/var/www/studioln/site/` | gebouwde frontend (`dist/`), eigendom van `deploy` |
| `/etc/caddy/sites/studioln.caddy` | Caddy-config ([studioln.caddy](studioln.caddy)) |

## Vóór de livegang

1. Snapshot maken in het TransIP-paneel.
2. Op de VPS (inloggen met `ssh -t lijcoesh@85.10.151.178`):
   ```
   sudo mkdir -p /var/www/studioln/site
   sudo chown -R deploy:deploy /var/www/studioln
   ```
3. GitHub-secrets in deze repo (Settings → Secrets and variables → Actions): `VPS_HOST` (het IP), `VPS_SSH_KEY` (de privé deploy-key) en `VPS_KNOWN_HOSTS` (uitvoer van `ssh-keyscan 85.10.151.178`). Dezelfde als bij WaterZacht, maar dan voor deze repo.
4. Eerste deploy: Actions → Deploy to VPS → Run workflow. Controleer dat `/var/www/studioln/site/index.html` er staat.
5. DNS bij de registrar: A-record voor `studioln.nl` en `www.studioln.nl` naar `85.10.151.178`. Wacht tot dat doorgekomen is.
6. Caddy-config zetten en laden:
   ```
   sudo cp studioln.caddy /etc/caddy/sites/studioln.caddy
   caddy validate --config /etc/caddy/Caddyfile
   sudo systemctl reload caddy
   ```
   Caddy haalt zelf het certificaat. Controleer `https://studioln.nl`, `https://www.studioln.nl` (moet doorsturen) en een diepe link zoals `https://studioln.nl/prijzen`.

## Contactformulier later aanzetten

Zodra het endpoint in de dashboard-API werkt: in GitHub onder Settings → Secrets and variables → Actions → **Variables** de variabele `VITE_CONTACT_ENDPOINT` zetten, en de workflow opnieuw draaien. Pas daarna het feitje "Contact" in `src/Config/about.ts` weer aanvullen met "het formulier", en controleer of de privacyverklaring nog klopt met wat het endpoint doet.

## Controleren

- Caddy: `systemctl status caddy`; config testen: `caddy validate --config /etc/caddy/Caddyfile`; na wijzigen `sudo systemctl reload caddy`.
- Wijzig je `studioln.caddy`, kopieer hem dan opnieuw naar `/etc/caddy/sites/`; de workflow zet alleen de site neer.
