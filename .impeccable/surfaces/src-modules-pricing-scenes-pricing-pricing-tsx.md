---
version: 1
slug: "src-modules-pricing-scenes-pricing-pricing-tsx"
primary_target: "src/Modules/Pricing/Scenes/Pricing/Pricing.tsx"
related_targets: ["src/Config/pricing.ts"]
---

# Prijzen

Scope: de pagina Prijzen (`/prijzen`) van StudioLN V2. Mode: Persuade.

Bezoeker: vakman van 40-50, weinig internetkennis, vaak op de telefoon. Hij wil weten wat het hem eenmalig en per maand kost, en belt, mailt of stuurt daarna een bericht. Alleen bedragen excl. btw, en dat staat erbij. Bron van de bedragen: de dashboardcatalogus (screenshot van Luca, 11-11-2026), vastgelegd in PRODUCT.md en `src/Config/pricing.ts`.

Besloten met Luca (11-11-2026): de pakketten als maattabel; de eenmalige bedragen in een opgestikte zak (combinatie van de structuren "De maattabel" en "In je zakken"). Eenmalig staat bovenaan, omdat dat voor de bezoeker het belangrijkst is; Los erbij (uurtarief, e-mailhosting) staat ernaast. Het blauwe canvas bovenaan blijft, maar moet duidelijk loskomen van de header: dat doet een dubbele stiknaad (de pas van de jas) met een smalle schaduw. Per pakket een feitelijke los-prijs, geen voordeel-badge of doorgestreepte prijs. Geen rekenvoorbeeld of samensteller.

Volgorde: canvas met pasnaad, kop en twee zakken naast elkaar → perzik vlak met de maattabel → afsluiting met de contactlap (gedeeld met Home via `SiteClose`) → footer.

Open: of een pakket verplicht is (de tekst zegt het daarom niet); of Home "Een website vanaf € 500" wordt "voor € 500".

## Direction contract

THESIS: Pakketten lees je zoals de maattabel in een kledingstuk: drie maten naast elkaar, regels voor wat erin zit, een kruissteek waar het inbegrepen is. Wat eenmalig is of los erbij komt, zit in opgestikte zakken bovenaan. Weigert de softwareprijstabel met drie gelijke kaarten, badges en doorgestreepte prijzen.

OWN-WORLD: Marineblauw keper-canvas onder de header, ervan gescheiden door een dubbele pasnaad met smalle schaduw; daarop zakken van perzik stof, rondom gestikt, dubbele zoomnaad aan de opening, zigzag-trensjes in draadkleur, licht gekanteld en van ongelijke maat. Daaronder een perzik vlak met één breed ingenaaid binnenlabel (geribde crème, omgeslagen gestikte korte kanten) als maattabel; naden als tabelregels; kruissteken van marineblauw garen met prikgaatjes, met een uitlegregel. Afsluiting met de oranje contactlap op canvas.

STORY: Hij ziet bovenaan wat een website eenmalig kost en wat los kan, vergelijkt daarna op het label Basis, Plus en Compleet regel voor regel, en belt, mailt of stuurt een bericht als hij twijfelt.

FIRST VIEWPORT: Canvas-header met Prijzen actief, daaronder een dubbele pasnaad over de volle breedte. Op het canvas h1 "Wat het kost" en één zin met "exclusief btw"; daaronder twee zakken naast elkaar (7fr / 5fr; onder md onder elkaar): Eenmalig -1° met de website (€ 500) als eerste regel, Los erbij +1,2° en iets lager. Onder de vouw het perzik vlak met de maattabel; op de telefoon blijven de kolomkoppen bovenaan staan tijdens het scrollen.

FORM: Maattabel + zakken (combinatie op verzoek van Luca van gedeelde structuren 1 en 5 uit de eigen lijst van zeven), seed key 84f0c565 (surface-roll). Signature: de pasnaad onder de header, kruissteken als inbegrepen-teken en zakken met zoomnaad en trensjes; geen laadanimatie.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
