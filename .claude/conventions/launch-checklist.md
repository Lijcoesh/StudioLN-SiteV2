# Launch-checklist

Dingen die makkelijk vergeten worden maar juridisch, ethisch of qua toegankelijkheid zwaar wegen. Loop deze lijst door **voordat het project als af wordt beschouwd** (oplevering, deploy naar productie, "we zijn klaar"). Het project is pas af als elk punt is afgevinkt of expliciet als "n.v.t." is gemotiveerd.

## Werkwijze

- Tijdens het werk: kom je iets tegen dat hier onder valt (bv. een formulier, een externe script, een afbeelding), regel het meteen of noteer het onder "Openstaand" onderaan.
- Bij afronding: loop elk punt na, controleer in de code/content (niet uit je hoofd) en meld per sectie wat gedaan is, wat n.v.t. is en wat nog openstaat.
- Kun je iets niet zelf invullen (bv. bedrijfsgegevens, juridische tekst)? Vraag het aan de gebruiker, verzin niets, en laat het niet stilletjes als placeholder staan.
- Juridische teksten die je genereert zijn een concept; wijs erop dat ze door de eigenaar of een jurist gecontroleerd moeten worden.

## Juridische pagina's

- [ ] **Privacybeleid**: welke data, waarvoor, grondslag, bewaartermijn, derden, rechten van betrokkenen, contactpunt. Gelinkt vanuit de footer en bij elk formulier.
- [ ] **Algemene voorwaarden** (terms of service), indien er diensten/producten/accounts zijn.
- [ ] **Retour-/refundbeleid**, indien er iets verkocht wordt (incl. herroepingsrecht).
- [ ] **Cookiebeleid**: lijst van cookies/local storage met doel en looptijd.
- [ ] **Bedrijfsgegevens**: bedrijfsnaam, adres, e-mail, KvK-/BTW-nummer, waar wettelijk vereist. Zichtbaar (footer/contact/impressum).

## Privacy & data

- [ ] **Cookie consent banner**: geen niet-essentiële cookies/trackers vóór toestemming; weigeren even makkelijk als accepteren; keuze later te wijzigen.
- [ ] **Formulieren**: consent-checkbox waar nodig (niet vooraf aangevinkt), duidelijke link naar privacybeleid, alleen verplichte velden verplicht.
- [ ] **Geen onnodige data**: elk veld/tracking-punt heeft een reden; verwijder wat we niet nodig hebben (dataminimalisatie).
- [ ] **Third-party SDK's en scripts auditen**: `package.json`, `index.html`, embeds (analytics, fonts via CDN, chat, maps, video, pixels). Wat laden ze, wat sturen ze door, staat het in het privacybeleid, is er een verwerkersovereenkomst nodig?
- [ ] **Leeftijdstoestemming**: worden er gegevens van kinderen verzameld (of kunnen ze dat)? Zo ja: leeftijdscheck en ouderlijke toestemming volgens de lokale wet (AVG: onder 16, NL; elders vaak 13).
- [ ] **Data verwijderen**: gebruiker kan zijn gegevens/account laten verwijderen (of er is een duidelijk verzoekkanaal), en dit staat in het privacybeleid.
- [ ] **Uitschrijflink in e-mails**: elke marketing-/nieuwsbriefmail heeft een werkende, één-klik uitschrijflink en een afzenderadres.

## Eerlijkheid & dark patterns

- [ ] **Dark patterns verwijderen**: geen misleidende knoppen, verborgen opt-outs, valse urgentie/schaarste, confirmshaming, moeilijk op te zeggen, vooraf aangevinkte opties.
- [ ] **Geen verborgen kosten**: totaalprijs incl. btw, verzend- en servicekosten zichtbaar vóór afrekenen.
- [ ] **Geen nepreviews/testimonials**: alle reviews, logo's, ratings en cijfers zijn echt en verifieerbaar. Placeholder-content ("Jan Jansen, 5 sterren") is weg.
- [ ] **Geen onbewezen claims**: superlatieven, cijfers ("10.000 klanten"), certificeringen, garanties en "#1" zijn te onderbouwen, of verwijderd.

## Toegankelijkheid

- [ ] **Alt-tekst**: elke betekenisvolle afbeelding heeft beschrijvende `alt`; decoratieve afbeeldingen `alt=""`; icoonknoppen hebben `aria-label`.
- [ ] **Kleurcontrast**: WCAG AA (4.5:1 tekst, 3:1 grote tekst en UI-elementen), zowel in `src/colors.ts` als in het theme; check ook hover-/disabled-/focusstaten.
- [ ] **Toetsenbordnavigatie**: alles bedienbaar met Tab/Enter/Space/Esc, logische volgorde, zichtbare focusstijl (niet weghalen), geen keyboard traps in modals/menu's, skip-link naar hoofdinhoud.

## Licenties

- [ ] **Fonts en afbeeldingen**: elke font, foto, illustratie en icoon heeft een licentie die commercieel gebruik toestaat; bronvermelding waar vereist. Leg herkomst vast (bv. in `src/Resources/` README of `LICENSES.md`).
- [ ] **Dependencies**: geen pakketten met een licentie die niet bij het project past (bv. AGPL/GPL in een gesloten project).

## Openstaand

_Noteer hier tijdens het werk punten die vóór oplevering nog geregeld moeten worden. Leeg = niets bekend, niet = alles gedaan; loop de lijst hierboven altijd volledig na._

- Over mij en Home (12-11-2026): teksten goedgekeurd door Luca. Ze gebruiken alleen feiten uit `PRODUCT.md`; Luca mag later een persoonlijker verhaal en persoonlijke feitjes toevoegen.
- Live op `https://studioln.nl` sinds 12-11-2026 (VPS-naam `studioln-site`, poort 5083). Nog open: de sitetabel en poortlijst in `F:/Development/StudioLN-Dashboard/.claude/vps.md` bijwerken (hier is dat gedaan); `deploy-pages.yml` draait nog bij elke push, dus weghalen of GitHub Pages uitzetten als de preview niet meer nodig is.
- Contactformulier (12-11-2026): API in `server/`, opgezet zoals Kamerbreed; het formulier post naar `/api/contact-messages`. Draait op de VPS (`/api/health` geeft `Healthy`). Luca meldt dat het werkt (12-11-2026); controleer bij twijfel dat een testbericht in `contact@studioln.nl` aankomt met de bezoeker als reply-to. In Brevo controleren dat `studioln.nl` als afzenderdomein geverifieerd is en dat de bewaarinstelling (logs een maand, previews nooit) geldt voor het account dat deze key gebruikt.
- SEO (12-11-2026): robots.txt, sitemap, beschrijving en canonical per pagina, deeltags en schema.org staan. De beschrijvingen in `src/Config/seo.ts` zijn concept. Nog te doen door Luca: Google Search Console (domein verifiëren met een TXT-record bij TransIP, sitemap indienen). Een deelafbeelding (`og:image`, 1200×630) ontbreekt nog; WhatsApp en LinkedIn tonen nu een link zonder plaatje.
- Prijzen: bedragen in `src/Config/pricing.ts` volgen de dashboardcatalogus (stand 11-11-2026); vóór livegang nog eens naast het dashboard leggen.
- Werkwijze staat (11-11-2026); de kop, ondertitel en patroonnamen zijn goedgekeurd door Luca (12-11-2026). De verzonnen voorbeeldsites ("Jouw Bedrijf" en "Jouw Klusbedrijf", met hun teksten) is als verzonnen gelabeld en bevat geen cijfers of reviews; zo houden. Het traject van eerste gesprek tot online komt later op die pagina.
- Privacyverklaring (concept, 12-11-2026, `src/Config/privacy.ts` en `src/Modules/Privacy`): Luca en liefst een jurist moeten hem nakijken. Geregeld: bewaartermijn 1 jaar na laatste contact (bevestigd door Luca, 12-11-2026); de API slaat niets op en gaat via Brevo naar de mailbox; Caddy heeft geen `log`-regel, dus geen toegangslog met IP-adressen. Nog voor een jurist: (1) of het adres in de verklaring moet (nu bewust niet, zie PRODUCT.md); (2) de grondslag (nu art. 6 lid 1 sub f).