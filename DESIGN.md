---
name: StudioLN
description: Websites op maat voor vakmensen, gedragen als werkkleding.
colors:
  navy: "#132B4F"
  navy-deep: "#0E2240"
  navy-raised: "#1D3B66"
  accent: "#C4531A"
  accent-hover: "#A8440F"
  peach: "#F8DCC8"
  peach-soft: "#FCEEE3"
  white: "#FFFFFF"
  label: "#FAF4EE"
  label-fold: "#E9DDD0"
  text: "#16202E"
  graphite: "#4E5866"
  on-navy: "#FAF4EE"
  on-navy-muted: "#C3CDDD"
  stitch-on-navy: "#7F93B3"
  stitch-on-light: "#8C7A6C"
  stitch-on-accent: "#F6C9AC"
  error: "#B0132F"
  warning: "#7A5A00"
  success: "#2F6B4F"
  project-tint-kamerbreed: "#DDD9C4"
  project-tint-stefvanzanten: "#E6DCF3"
  project-tint-placeholder: "#E9DDD0"
  slop-ground: "#170F36"
  slop-raised: "#2A1B5C"
  slop-violet: "#7C6CF0"
  slop-pink: "#E05AD8"
  slop-lavender: "#B9AEFF"
  slop-text: "#F4F2FF"
  slop-muted: "#B3ADD6"
  slop-light-ground: "#FBFCFD"
  slop-light-ink: "#14202B"
  slop-light-muted: "#5B6875"
  slop-light-line: "#E3E8EE"
  slop-emerald: "#10B981"
  slop-emerald-deep: "#047857"
  slop-blue: "#3B82F6"
typography:
  display:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.4rem + 4.4vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.5rem + 2.1vw, 3.375rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.15
  title-small:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
  price:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  garment: "2px"
spacing:
  unit: "8px"
  page-gutter: "48px"
  page-gutter-md: "32px"
  page-gutter-sm: "20px"
  section: "112px"
  section-md: "72px"
  tap-target: "56px"
components:
  contact-route:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    padding: "28px 22px"
    height: "112px"
  contact-route-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.white}"
  canvas-field:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
  inner-label:
    backgroundColor: "{colors.label}"
    textColor: "{colors.text}"
    padding: "52px 72px 24px"
  hang-tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.price}"
    padding: "40px 28px 28px"
    width: "288px"
  woven-label:
    backgroundColor: "{colors.label}"
    textColor: "{colors.navy}"
    padding: "26px 38px"
  pocket:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.text}"
    padding: "56px 40px 32px"
  size-chart:
    backgroundColor: "{colors.label}"
    textColor: "{colors.text}"
    padding: "52px 72px 24px"
  fitting-room-label:
    backgroundColor: "{colors.label}"
    textColor: "{colors.text}"
    padding: "44px 48px 12px"
  pattern-choice:
    textColor: "{colors.text}"
    height: "60px"
  template-site:
    backgroundColor: "{colors.slop-ground}"
    textColor: "{colors.slop-text}"
  button-outlined-on-navy:
    textColor: "{colors.on-navy}"
    rounded: "{rounded.garment}"
    padding: "10px 20px"
    height: "48px"
---

# Design System: StudioLN

## Overview

**Creative North Star: "Werkkleding"**

De site draagt dezelfde kleding als zijn bezoeker: een stevige marineblauwe werkjas met oranje contrastvlakken, zichtbaar gestikt, met het logo als geweven label. Alles wat je ziet is stof, naad of label. Marineblauw canvas met een fijne keperbinding is de grond van de zware delen (header, hero, de opening van Prijzen, afsluiting, footer); perzik en wit zijn de lichte vlakken daartussen; één oranje contrastbaan draagt de acties.

De dichtheid is rustig en ruim: grote Bree Serif-koppen, een op leesbaarheid ontworpen tekstletter op 19px, brede secties (112px verticaal). Vormen zijn vrijwel recht (2px), diepte bestaat alleen waar stof over stof ligt. Lijnen zijn altijd stiknaden: gestippeld, met ronde steekuiteinden, en elke naad verbindt of begrenst een stuk stof.

De site weigert het standaard dienstverlenerssjabloon (hero met foto, icoonkaartjes, CTA-band) en elk AI-recept: geen eyebrows, geen glas, geen nummering, geen gradients, geen glans. Alleen in de paskamer op Werkwijze hangt dat recept, als verzonnen voorbeeld in eigen stof, om het aan te wijzen.

**Key Characteristics:**
- Marineblauw keper-canvas als grond voor header, hero, afsluiting en footer; de header blijft staan en eindigt in een dubbele pasnaad.
- Oranje is de enige drager van acties: de contrastbaan met drie gelijke contactroutes in de hero, en een vastgestikte oranje lap met dezelfde routes in de afsluiting.
- Gestippelde stiknaden als enige lijnen.
- Geweven crème label met omgevouwen, gestikte uiteinden als herkenningsteken.
- Een breed ingenaaid binnenlabel op perzik met wat er in de website zit, met de prijs als wit hangkaartje aan een oranje draad; op Prijzen is hetzelfde label de maattabel van de pakketten, met kruissteken waar iets inbegrepen is.
- Opgestikte zakken van perzik stof voor losse prijzen.
- Bree Serif voor koppen, Atkinson Hyperlegible Next voor tekst.
- Eén laadmoment: de naad van de contactbaan stikt zich dicht bij het laden. Verder beweegt alleen wat je aanraakt; de enige andere steek die zich dichtstikt is de oranje rijgsteek in de paskamer, om het patroon dat aanstaat.

## Colors

Huisstijlkleuren van StudioLN (marineblauw, oranje, perzik, wit), gedragen als werkkleding: zwaar donker canvas, één fel contrastvlak, lichte stoffen ertussen.

### Primary
- **Werkjas-oranje** (accent): de contrastbaan en de contactlap. Achtergrond van de contactroutes, onderstreepkleur van tekstlinks, actieve navigatiestreep, focusring op lichte vlakken en tekstcursor. Wit erop haalt 4,6:1.
- **Doorgestikt oranje** (accent-hover): hovertint van een contactroute (wit erop 5,9:1).

### Secondary
- **Werkjas-marineblauw** (navy): canvasgrond onder de keperbinding; kleur van koppen op lichte vlakken; tekstselectie.
- **Diep marineblauw** (navy-deep): alleen als schaduwkleur van stof op stof.
- **Opgehaald marineblauw** (navy-raised): scrollbalkduim en de onderste draad van de kruissteek in de maattabel.

### Tertiary
- **Perzik paneel** (peach): de grond onder het binnenlabel, de maattabel en het Over mij-vlak, de stof van de zakken op het canvas van Prijzen, het gaatje in het hangkaartje, en de tweede zin van de tweekleurige koppen op het canvas (hero en "Simpel, maar nooit standaard.").
- **Zakstof** (peach-soft): de opgestikte lap onder de foto bij Over mij en de scrollbalkbaan.

### Neutral
- **Wit** (white): standaard paginagrond, tekst op oranje en het karton van het hangkaartje.
- **Labelcrème** (label): het geweven label, het binnenlabel en de maattabel, tekst op marineblauw (als on-navy), skiplink; in de kruissteek de smalle rand waar de bovenste draad over de onderste ligt.
- **Labelvouw** (label-fold): de omgevouwen uiteinden van beide labels.
- **Inkt** (text): lopende tekst op lichte vlakken.
- **Grafiet** (graphite): secundaire tekst, de onderregel van het label, de makersregel op het binnenlabel, de kleine regels op het hangkaartje, toelichtingen en eenheden in zakken en maattabel, de "Los per maand"-kolom, de prikgaatjes van de kruissteek en de losse steek voor niet inbegrepen.
- **Mistblauw** (on-navy-muted): ondertitels en bijtekst op het canvas.
- **Draadkleuren** (stitch-on-navy, stitch-on-light, stitch-on-accent): alleen voor stiknaden en trensjes, één per ondergrond. Ook de hoverstreep in de navigatie gebruikt de draadkleur op marineblauw, en de lichte twijnlijn over het marineblauwe garen van de kruissteek.
- **Signalen** (error, warning, success): altijd samen met icoon en tekst, nooit alleen kleur.

### Klantlappen
- **Klantstof** (project-tint-*): per project een lichte tint afgeleid van de kleuren van de klantsite (Kamerbreed stone-olijf, Stef van Zanten lila; plaatshouders labelvouw). Alleen als lap onder het screenshot in een projectstrook op Projecten, nergens anders. Een nieuw project krijgt een eigen tint in `src/colors.ts`, licht genoeg voor stitch-on-light.

### Sjabloonstof
- **Trendstof** (slop-*): de kleuren van de verzonnen sjabloonsite op Werkwijze, de enige vreemde stof in de wereld. Donkerpaarse grond (slop-ground) met verhoogd paars (slop-raised) in de icoontegels, violet en roze (slop-violet, slop-pink) voor kleurverloop en gloed, lavendel (slop-lavender) in het labeltje, en tekst in slop-text en slop-muted. De lichte sjabloonsite gebruikt slop-light-* (bijna-witte grond, inkt, gedempte tekst, lijntjes) met smaragd en blauw (slop-emerald, slop-emerald-deep, slop-blue) voor kleurverloop, labeltje en icoontegels. Alleen binnen de sjabloonsites, nergens anders.

### Named Rules
**The Contrastbaan Rule.** Oranje als vlak bestaat alleen waar de contactroutes staan: de contactbaan in de hero en de contactlap in de afsluiting. Elders verschijnt oranje alleen als draad (onderstreping, actieve streep, focusring, de draad waaraan het hangkaartje hangt, de geborduurde naam op de naamband, de rijgsteek en het actieve teken in het lijstje van de paskamer), nooit als knop, kaart of achtergrond.

**The Draad-per-stof Rule.** Een naad krijgt de draadkleur van de stof waarop hij ligt: stitch-on-navy op canvas, stitch-on-light op perzik/wit/label, stitch-on-accent op de baan.

**The Vreemde-stof Rule.** Kleurverloop, gloed, glas en blur, ronde pillen, een labeltje boven de kop, nummering en de systeemletter bestaan alleen binnen de twee verzonnen sjabloonsites op Werkwijze (de paarse in de paskamer, de lichte naast de tekst bovenaan), in de slop-kleuren. Daar zijn ze het voorbeeld dat de tekst aanwijst, geen huisstijl: niets ervan verlaat het afdrukje, en de verboden in Do's and Don'ts gelden voor de rest van de site onverkort.

## Typography

**Display Font:** Bree Serif (met Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next Variable (met system-ui, sans-serif)

**Character:** Bree Serif is de huisstijlletter: stevig, vriendelijk, met de afgeronde schreven van een werkplaatsbord. Atkinson Hyperlegible Next is gekozen voor de doelgroep (40-50+, niet digitaal vaardig): elke letter onderscheidbaar. Beide lokaal via @fontsource.

### Hierarchy
- **Display** (400, clamp 2,75-5,5rem, 1,02): de paginakop. De hero zet het maximum op 5rem zodat beide zinnen vanaf md elk op één regel staan; de tweede zin in perzik.
- **Headline** (400, clamp 2,125-3,375rem, 1,08): sectiekoppen, navy op licht en on-navy op canvas, vaak smal gehouden (11-18ch). Een sectiekop mag als groot moment de display-maten dragen (een h2 in de h1-stijl), zoals "Simpel, maar nooit standaard." op het canvas, met de tweede zin in perzik net als in de hero.
- **Title** (400, clamp 1,5-1,875rem, 1,15): de regeltitels op het binnenlabel, de koppen van de zakken en van de maattabel (h2 in deze stijl), en de bedragen in de zakken. De naam op het binnenlabel staat op 1,875rem; de contactroutes gebruiken Bree Serif op 1,375-1,625rem. Op Werkwijze ook de kop van het lijstje in de paskamer (h2 in deze stijl) en, in navy op wit, de nadrukzin en de slotzin van het verhaal, zodat Luca's eigen stem boven de lopende tekst uitkomt.
- **Price** (400, 3,25rem, 1): het bedrag op het hangkaartje, in navy, met "Een website vanaf" en "excl. btw" in grafiet op 1,0625rem eromheen. In de kolomkoppen van de maattabel staat de pakketprijs kleiner in Bree Serif (clamp 1,375-2,75rem, 1), onder de pakketnaam (clamp 1,25-1,875rem) en boven "per maand" in grafiet. Bedragen staan als "€ 25", met centen alleen waar ze er zijn ("€ 49,50").
- **Title small** (400, 1,375rem, 1,2): kolomkoppen in de footer.
- **Lead** (400, clamp 1,25-1,5rem, 1,5): één ondertitel onder een display- of afsluitkop, max 38-40ch. Op Werkwijze staan drie lead-alinea's als één kolom onder de kop (max 44ch).
- **Body** (400, 1,1875rem, 1,65): lopende tekst, max 58ch; intro's 44ch. Namen van regels in zakken en maattabel staan in body op 700.
- **Label** (700, 1,0625rem): knoppen en navigatielinks, geen hoofdletters, geen letterspatiëring.

### Named Rules
**The Kop-staat-alleen Rule.** Een kop staat op zichzelf. Geen labeltje erboven; hoort er context bij, dan gaat die in de kop of in de tekst eronder. In de contactbaan staat het werkwoord op dezelfde regel als de waarde ("Bel 06 …").

**The Gewicht-400 Rule.** Bree Serif staat altijd op 400; nadruk komt uit formaat en kleur, niet uit vet.

## Layout

Paginabreedte 1240px inhoud (maximaal 1336px met marges), zijmarges 48px, 32px onder md, 20px onder sm. Spacing volgt de MUI-eenheid van 8px. Secties krijgen 112px verticaal (72px onder md); de hero 72px boven en 96px onder.

Composities zijn asymmetrisch, maar niet elke sectie krijgt dezelfde vorm. Het 5fr / 6fr-raster (kolomafstand 64px) is de gedeelde as: de dienstensectie zet daarop kop links en intro rechts boven het binnenlabel; "Simpel, maar nooit standaard." staat als display-kop over de volle breedte op het canvas, met een naad bovenaan, en de tekst eronder (lead-maat, max 44ch) deelt de linkerkant van de kop. Over mij zet de foto links en de tekst rechts op het 5fr / 6fr-raster. Onder md is alles één kolom. De hero zet kop en ondertitel links en het label rechts op borsthoogte; onder lg komt het label onder de kop.

Het binnenlabel loopt over de volle inhoudsbreedte, met binnenruimte 52px boven, 72px opzij en 24px onder (44 / 40 / 16px onder md, 40 / 28 / 8px onder sm). Het perzik vlak eronder houdt onderaan ruimte vrij voor het hangkaartje (336px, 368px onder md). Het canvasmoment krijgt 128px verticaal (80px onder md).

Canvasvelden die op elkaar aansluiten houden vaste hoogtes op een veelvoud van 8px (header 96px, 80px onder md), zodat de 8px-kepertegel naadloos doorloopt. Dat blijft gelden nu de header vast bovenaan staat: de pasnaad ligt binnen die hoogte. Ankers en toetsenbordfocus houden de headerhoogte plus 16px vrij (scroll-padding). Onder de footer loopt het canvas door in plaats van een witte band.

Prijzen volgt het ritme canvas, perzik, canvas. Bovenaan op het canvas de h1 met één lead-zin (max 44ch) en daaronder twee zakken op een 7fr / 5fr-raster (kolomafstand 64px), de tweede 80px lager; onder md onder elkaar met 48px ertussen. Het canvas krijgt 80px boven en 112px onder (56 / 72px onder md). Daarna het perzik vlak (112px verticaal, 72px onder md) met de maattabel over de volle inhoudsbreedte, met dezelfde binnenruimte als het binnenlabel (onder sm 40 / 24 / 8px). Dan de afsluiting op canvas.

Projecten volgt het ritme canvas, perzik, canvas. Bovenaan op het canvas de h1 links en één lead-zin rechts op het 5fr / 6fr-raster (80px boven, 96px onder; 56 / 64px onder md). Daarna het perzik vlak, net als Over mij op Home (112px verticaal, 72px onder md) met de projectstroken onder elkaar over de volle inhoudsbreedte, 48px ertussen (40px onder md), allemaal in dezelfde richting. Dan de afsluiting op canvas.

Werkwijze volgt het ritme canvas, perzik, wit. Bovenaan op het canvas de tweekleurige h1 ("Simpel, maar nooit standaard.", tweede zin in perzik) over de volle breedte en daaronder op het 5fr / 6fr-raster links de drie intro-alinea's als één kolom in lead-maat (max 44ch, 20px ertussen, 48px onder de kop; 32px onder md) en rechts, vanaf lg, een eerste verzonnen voorbeeld: de lichte sjabloonsite als los afdrukje op het canvas, +1,2° gekanteld, met de zware stof-op-stof-schaduw (onder lg weg) (80px boven, 96px onder; 56 / 64px onder md). Geen kop links met tekst rechts: naast een hoog tekstblok blijft de kop als los eilandje hangen. Eén taak per vlak: het canvas vertelt het probleem, het perzik vlak laat het zien, het wit geeft het antwoord. Het perzik vlak met de paskamer (112px verticaal, 72px onder md) draagt geen losse tekst: een 7fr / 5fr-raster (kolomafstand 64px), links het afdrukje, rechts het lijstje op labelstof, verticaal gecentreerd; onder lg één kolom van maximaal 760px, afdrukje boven het lijstje (40px ertussen, 32px onder md). Dan het verhaal op wit (112px verticaal, 72px onder md) op het 5fr / 6fr-raster: links de h2 (max 12ch) met daaronder de fotolap (340px breed, 56px onder de kop), zodat zichtbaar is wie er "ik" zegt en links geen leeg vlak naast de tekst staat; rechts de tekst (max 58ch, 24px tussen alinea's). Onder md één kolom: kop, fotolap (300px, 260px onder sm), tekst. Dan de afsluiting op canvas.

De afsluiting is één gedeelde sectie aan het eind van elke pagina (nu Home, Prijzen, Projecten en Werkwijze), met per pagina een eigen kop en ondertitel. Ze zet kop en ondertitel links en de contactlap rechts op het 5fr / 6fr-raster, verticaal gecentreerd; onder lg komt de lap onder de kop, over de volle inhoudsbreedte. Onder de afsluiting begrenst een naad op canvas (binnen de paginabreedte) de overgang naar de footer.

De contactbaan loopt altijd over de volle breedte, met drie gelijke vakken op lg en groter en onder lg drie vakken onder elkaar, elk over de volle breedte en gescheiden door een horizontale naad. Aanklikbare vakken zijn minimaal 56px hoog; contactroutes 112px (98px gestapeld).

## Elevation & Depth

De site is vlak. Diepte bestaat alleen waar een los stuk stof of karton op een ander ligt: het geweven label op het canvas, het binnenlabel en de maattabel op het perzik vlak, het hangkaartje eronder, en de vaste header die tijdens het scrollen over de pagina ligt. Wat vastgestikt is (de lap onder de foto, de naamband, de zakken op Prijzen) krijgt geen schaduw; daar dragen tint en naden de gelaagdheid.

### Shadow Vocabulary
- **Stof op stof** (`box-shadow: 0 10px 24px rgba(14,34,64,0.45), 0 2px 4px rgba(14,34,64,0.35)`): onder het geweven label op het canvas.
- **Stof op licht** (`box-shadow: 0 10px 24px rgba(14,34,64,0.16), 0 2px 4px rgba(14,34,64,0.12)`): dezelfde schaduw op een licht vlak, onder het binnenlabel, de maattabel en het hangkaartje op perzik. Ook onder de vaste header, op elke ondergrond: boven canvas maakt de pasnaad hem zichtbaar, de schaduw blijft smal.
- **Zacht** (`box-shadow: 0 1px 2px rgba(14,34,64,0.12)`): gemapt op MUI-elevation 1-4; Paper staat standaard op 0, dus in de huidige build niet zichtbaar.

### Named Rules
**The Stof-op-stof Rule.** Een schaduw betekent dat een los stuk stof of karton op een ander ligt: de labels, de maattabel, het hangkaartje en de vaste header die over de pagina schuift. Op canvas de zware variant, op een licht vlak de lichte; de header draagt altijd de lichte. Geen schaduw op vastgestikte lappen en zakken, vlakken, knoppen, de contactbaan of de contactlap. Op Projecten ligt elke projectstrook los op het perzik vlak en het screenshot als los afdrukje op de lap: beide de lichte variant. Op Werkwijze liggen het afdrukje van de sjabloonsite en het lijstje op labelstof los op het perzik vlak: ook de lichte variant.

## Shapes

Kleding heeft geen afgeronde kaarten: alle hoeken zijn vrijwel recht (2px), vlakken, labels en het kaartje volledig recht. Randen zijn nooit doorgetrokken lijnen maar stiknaden: 2px dik, steek 10px, tussenruimte 7px, ronde uiteinden. Losse stukken staan licht gekanteld: het hero-label (-4°, -2,5° onder lg), het hangkaartje (-4°, -3° onder md), de lap onder de foto (-1,5°), de naamband op die lap (+3°) de zakken op Prijzen (-1° en +1,2°, ±0,6° onder md) het afdrukje in een projectstrook (om en om -1° en +0,8°, ±0,5° onder md), het afdrukje in de paskamer (-0,8°, -0,5° onder md) en de rijgsteek (-1,2°). Het binnenlabel, de maattabel en het lijstje in de paskamer liggen recht. Omgevouwen korte kanten zijn 12px op het hero-label en 16px op het binnenlabel. Afgerond zijn alleen het LN-logoblok uit de huisstijl en het geponste gaatje in het hangkaartje (14px rond, rand 2px in draadkleur).

**The Naad Rule.** De enige getekende lijn op de site is een gestippelde stiknaad, en elke naad verbindt of begrenst een stuk stof: de baan boven en onder, tussen de routes, de uiteinden en de bovenrand van een label, de regels op het binnenlabel, de rand rond de foto en rond de naamband, de bovenrand van het canvasmoment, de dubbele pasnaad onder de header, de rand en de zoom van de zakken, de regels van de maattabel en van het lijstje in de paskamer, de onderkant van de footer en de items in het menu. De draad van het hangkaartje is geen lijn maar garen: één doorlopende, slappe oranje draad. Ook trensjes, kruissteken, de oranje rijgsteek en het ringetje voor elke regel in het lijstje van de paskamer zijn garen, geen lijn.

## Components

### Contactbaan
Het signatuurelement en de enige drager van acties. Een oranje band over de volle breedte met een naad boven en onder, en drie gelijke routes: Bel (tel-link), Mail (mailto), Stuur een bericht (naar Contact). Elke route: omlijnd icoon, werkwoord plus waarde in Bree Serif, een pijl. Hover: de route kleurt naar accent-hover en de pijl schuift 6px op (220ms, cubic-bezier(0.16, 1, 0.3, 1)); focus: ring 6px naar binnen. Tussen de routes een verticale naad, gestapeld een horizontale. Staat alleen in de hero; de afsluiting gebruikt de contactlap.

### Contactlap
De afsluiting (één gedeelde sectie, op Home, Prijzen, Projecten en Werkwijze) herhaalt de baan niet, maar zet dezelfde drie routes op een oranje lap naast de kop: recht, zonder schaduw, rondom vastgestikt met een naad in stitch-on-accent op 8px van de rand. De routes staan onder elkaar, gescheiden door naden die van zijnaad tot zijnaad lopen; per route icoon, werkwoord plus waarde in Bree Serif (clamp 1,375-1,75rem) en de pijl rechts uitgelijnd. Hover en focus als bij de baan (accent-hover, pijl 6px, ring 6px naar binnen). Elke route minimaal 98px hoog. Geen laadanimatie.

**Beweging:** in de hero stikken de naden van de baan zich één keer dicht bij het laden (clip van links naar rechts, 1700ms, 350ms vertraging, cubic-bezier(0.16, 1, 0.3, 1)). Bij prefers-reduced-motion staat de naad er meteen. Dit is het enige laadmoment van de wereld; verder beweegt alleen wat je aanraakt (contactroute, tekstlink, hangkaartje, de rijgsteek in de paskamer). Bij het openen ligt de rijgsteek al om het eerste patroon, zonder dichtstikken; hij stikt zich pas dicht als de bezoeker een patroon kiest.

### Canvasveld
Marineblauw met een 8px keperbindingtegel (lichte en donkere diagonalen op lage dekking), tekst in on-navy, en `data-surface="dark"` zodat de focusring wit wordt. Grond voor header, hero, de opening van Prijzen, Projecten en Werkwijze, afsluiting, footer en het mobiele menu.

### Geweven label
Een geribde crème band (4×6px ribtextuur) met LN-logo, naam in Bree Serif en de regel "websites op maat" in grafiet. De korte kanten zijn 12px omgevouwen (label-fold), met een naad erdoor; alleen daar vastgestikt. Licht gekanteld, met de stof-op-stof-schaduw. Puur herkenning: verborgen voor schermlezers.

### Binnenlabel
Een breed ingenaaid label op het perzik vlak, van dezelfde geribde crème stof als het hero-label maar met een zachtere rib (label-rib-soft, 4×6px), zodat het grote vlak crème blijft. Bovenaan ingestikt met een naad tussen de vouwen, korte kanten 16px omgeslagen (label-fold) met een naad erdoor, recht en met de lichte stof-op-stof-schaduw. Kop van het label: LN-logo (44px), StudioLN in Bree Serif op 1,875rem en "gemaakt op maat, door Luca" in grafiet, afgesloten met een naad. Daaronder de diensten als echte lijst: titel (h3) plus tekst (max 46ch), twee kolommen vanaf lg en één daaronder, regels gescheiden door naden. Geen iconen, geen nummers.

### Hangkaartje
Een wit kartonnen kaartje (288px, 260px onder sm) dat aan de onderrand van het binnenlabel hangt, rechts op desktop en links onder md. Een slappe oranje draad (2px, ronde uiteinden, als SVG getekend) loopt door een geponst gaatje bovenin. Het kaartje hangt op -4° (-3° onder md) en zwaait bij hover of focus naar -1,5° (420ms, cubic-bezier(0.16, 1, 0.3, 1)); bij prefers-reduced-motion beweegt het niet. Inhoud: "Een website vanaf", het bedrag in de Price-stap, "excl. btw" en de tekstlink "Bekijk alle prijzen". Het hele kaartje is één link naar Prijzen; de onderstreping zakt mee bij hover en focus. Lichte stof-op-stof-schaduw.

### Fotolap
De foto bij Over mij staat groot (tot 480px breed, 360px onder md, foto 4:5) op een opgestikt stuk zakstof (peach-soft) op het perzik vlak: 20px rand, rondom gestikt op 8px van de rand, -1,5° gekanteld. Over de rechteronderhoek is een naamband gestikt: een strook marineblauw keper-canvas met een naad rondom (stitch-on-navy, 6px van de rand), +3° gekanteld, met "Luca" in Bree Serif (2,75rem, 2,125rem onder sm) geborduurd in oranje draad. Lap en band zijn vastgestikt en hebben geen schaduw; de band is voor schermlezers verborgen omdat de naam al in de kop of de alt-tekst staat. Eén gedeelde component (`PhotoPatch`); op Werkwijze staat dezelfde lap kleiner (340px) op wit onder de kop van het verhaal. Geen verdere decoratie: de persoon staat voorop.

### Zak
Een opgestikte zak van perzik stof op het canvas, voor losse prijzen (Eenmalig, Los erbij). Rondom gestikt op 8px van de rand, met een tweede zoomnaad 14px onder de bovenste naad, aan de opening. Op beide bovenhoeken een trensje: een korte, dichte zigzagsteek (8×24px) in stitch-on-light dwars over de zoom. Licht gekanteld en van ongelijke maat (7fr / 5fr), vastgestikt en dus zonder schaduw. Binnenruimte 56 / 40 / 32px (52 / 24 / 20px onder sm). Inhoud: kop in de Title-stijl in navy, één zin in grafiet, dan regels gescheiden door naden (minimaal 56px hoog): naam (700), toelichting in grafiet en rechts het bedrag in Bree Serif op de Title-maat, met een eenheid ("per uur", "per maand") in grafiet eronder. Onder sm loopt de toelichting onder het bedrag door.

### Maattabel
Het binnenlabel als maattabel van de pakketten: dezelfde geribde crème stof, ingestikte bovenrand, 16px omgeslagen korte kanten en lichte stof-op-stof-schaduw. Kop: LN-logo (44px), "Pakketten per maand" in de Title-stijl en "excl. btw" in grafiet, afgesloten met een naad. Daaronder een echte tabel: de dienst (naam 700 plus toelichting in grafiet, max 40ch), een kolom "Los per maand" in grafiet, en drie maten Basis, Plus en Compleet met naam en prijs in Bree Serif. Tabelregels zijn naden. Onderaan een feitelijke regel "Los zou dit per maand kosten" met per pakket het opgetelde losse bedrag, in grafiet, zonder naad eronder. Geen badges, geen aanbevolen pakket, geen doorgestreepte prijzen. Onder sm wordt elke regel een raster van drie kolommen, gelijk aan de drie maten: de dienst over twee kolommen met het losse bedrag ("los € 25") rechts, daaronder de drie tekens; de kopregel met de maten blijft tijdens het scrollen direct onder de vaste header staan (80px).

### Kruissteek
Het teken in de maattabel (26px). Inbegrepen: twee draden marineblauw garen (4px, ronde uiteinden) die elkaar kruisen, de onderste in navy-raised, de bovenste in navy met een smalle rand in labelkleur waar hij over de onderste ligt; over elke draad een lichte gestippelde twijnlijn in stitch-on-navy, en een prikgaatje in grafiet aan elk uiteinde. Niet inbegrepen: één korte grafiet steek tussen twee prikgaatjes. Voor schermlezers "Inbegrepen" of "Niet inbegrepen". Er staat geen uitlegregel bij.

### Projectstrook
Eén project op Projecten, als strook stof over de volle inhoudsbreedte, met twee aan elkaar gezette stukken op een 7fr / 5fr-raster: links de klantlap (project-tint), rechts geribde crème labelstof (label-rib, 4×6px). Eén naad rondom de hele strook op 8px van de rand, en één naad over de verbinding (verticaal; onder md horizontaal). Lichte stof-op-stof-schaduw onder de strook.

Op de lap ligt het screenshot als los afdrukje, helemaal binnen de naden (binnenruimte 48px, 40 / 32px onder md, 32 / 24px onder sm): een balk van 36px in labelcrème met het domein in grafiet (geen browserstipjes), daaronder het screenshot (1200×750) volledig, met de lichte schaduw en om en om licht gekanteld. Op de labelstof: de naam (h2 in Bree Serif, navy, clamp 1,75-2,375rem), één regel over het bedrijf in inkt, één zin over wat ik maakte in grafiet (beide max 40ch) en de tekstlink "Bekijk <domein>" met een icoon voor nieuw tabblad. De link rekt zich uit over de hele strook; de focusring (3px oranje) staat om de strook. Hover: het afdrukje schuift 6px omhoog (220ms, cubic-bezier(0.16, 1, 0.3, 1)), niet bij prefers-reduced-motion. Een plaatshouder heeft geen link, beweegt niet, toont "Screenshot volgt" en het woord "Plaatshouder". Onder md staat de lap boven de labelstof.

### Paskamer
Eén verzonnen sjabloonsite naast een lijstje dat in gewone woorden aanwijst wat je ziet. Het afdrukje: labelcrème papier met de lichte stof-op-stof-schaduw, licht gekanteld, bovenaan een balk van 36px met "Verzonnen voorbeeld" in grafiet (0,9375rem; geen browserstipjes), daaronder de sjabloonsite; eronder een bijschrift in grafiet (body small). Het lijstje: dezelfde ingenaaide labelstof als de maattabel (label-rib-soft, 4×6px), ingestikte bovenrand, 16px omgeslagen korte kanten met een naad erdoor, binnenruimte 44 / 48 / 12px (40 / 28 / 8px onder sm), lichte stof-op-stof-schaduw. Kop "Wat je hier ziet" in de Title-stijl in navy, afgesloten met een naad; daaronder de patronen als regels gescheiden door naden. Elke regel is een schakelknop (aria-pressed), minimaal 60px hoog, tekst in body op 700 met ervoor een ringetje van 24px: uit een gestippelde ring (2px, steek 4/4) in stitch-on-light, bij hover in navy; aan een dikkere gestippelde ring (3px, steek 7/4) met een stip in het midden, in werkjas-oranje, en de tekst krijgt de oranje onderstreping van een tekstlink. Focus: ring van 3px oranje op 3px afstand. Er staat altijd één patroon aan (bij het openen het eerste); kiezen legt de rijgsteek om dat stuk van de sjabloonsite en scrollt het in beeld als het buiten het scherm valt.

### Sjabloonsite
Het bewuste tegenvoorbeeld: een verzonnen site ("Jouw Bedrijf") in de trendstof, in code gebouwd zodat hij scherp blijft en meeschaalt met de breedte van het afdrukje; onder sm de telefoonversie. Hij toont precies wat de tekst noemt: een labeltje als pil boven de kop, een kleurverloop in de kop, een gloeiende knop, glazen kaarten met icoontjes en genummerde stappen. Geen nepcijfers, nepreviews of badges. Voor schermlezers één afbeelding met een beschrijving. Alles erin valt onder de Vreemde-stof Rule en is geen bouwsteen voor de rest van de site.


### Sjabloonsite, licht
Het tweede verzonnen voorbeeld, naast de tekst bovenaan Werkwijze: geen karikatuur maar een nette, lichte vakmansite ("Jouw Klusbedrijf") zoals bezoekers ze bij concurrenten tegenkomen, met dezelfde trucjes in een net ander jasje: een labeltje boven de kop, een kleurverloop (smaragd naar blauw) in de kop, een knop met gekleurde schaduw, drie kaartjes met getinte icoontegels, wazige kleurvlekken op de grond. Systeemletter, slop-light-kleuren, statisch (geen rijgsteek), schaalt mee met de breedte (cqi). Zelfde afdrukje-anatomie als in de paskamer (balk "Verzonnen voorbeeld"); op het canvas de zware schaduw. Voor schermlezers één afbeelding met beschrijving. Valt onder The Vreemde-stof Rule.
### Rijgsteek
Een met de hand gelegde lus van oranje draad (werkjas-oranje, 3px, ronde uiteinden) om het gekozen patroon in de sjabloonsite: lange, ongelijke steken (17 / 12 / 20 / 14px met 8px ertussen), getekend op de gemeten maat van het stuk zodat de steken overal even lang blijven. De lus wijkt hier en daar uit, hangt -1,2° scheef en loopt bij het sluiten een stukje over het begin heen. Ruimte rondom 0,55em boven en onder en 0,75em opzij; de krappe variant om tekst in een kop houdt verticaal 0,12em aan, zodat de lus niet door de regel erboven loopt. Bij elke keuze (en voor het eerste patroon als de paskamer verschijnt) stikt hij zich één keer dicht van links naar rechts (clip, 640ms, cubic-bezier(0.16, 1, 0.3, 1)); bij prefers-reduced-motion staat hij er meteen. Puur aanwijzing: verborgen voor schermlezers, de knop in het lijstje draagt de staat.

### Links
Tekstlinks zijn altijd onderstreept (2px, offset 0,22em) in werkjas-oranje en vet; bij hover zakt de streep naar 0,32em. Ze verwijzen door naar pagina's en dragen geen knopvorm.

### Navigation
Header op canvas, vast bovenaan tijdens het scrollen (boven de inhoud, met de lichte stof-op-stof-schaduw), 96px hoog (80px onder md). De onderrand is de pasnaad: twee naden in stitch-on-navy over de volle schermbreedte, 6px uit elkaar en 6px boven de onderkant, op elke pagina. Woordmerk links, links rechts in 700 op 1,0625rem, minimaal 48px hoog. Hover: streep van 3px in draadkleur op marineblauw; actieve pagina: oranje streep. Onder md een omlijnde Menu-knop (2px rand in draadkleur, 2px hoeken) die een canvaslade van rechts opent met Bree Serif-links op 2rem, gescheiden door naden, en onderaan bellen en mailen.

### Buttons
Alleen de omlijnde knop op canvas (menu openen/sluiten): geen elevatie, 2px hoeken, minimaal 48px hoog. Er bestaat geen gevulde knop; acties lopen via de contactbaan en de contactlap.

### Focus
Ring van 3px in werkjas-oranje met 3px afstand; op canvas in on-navy.

## Do's and Don'ts

### Do:
- **Do** zet elke contactactie op oranje: in de contactbaan (hero) of de contactlap (afsluiting), met de drie routes altijd gelijkwaardig.
- **Do** teken elke lijn als stiknaad (2px, steek 10px, tussenruimte 7px, ronde uiteinden) in de draadkleur van de onderliggende stof.
- **Do** houd aansluitende canvasvelden op een hoogte die een veelvoud van 8px is.
- **Do** zet een opsomming van wat de klant krijgt op een ingenaaid label: geribde crème stof, omgeslagen gestikte korte kanten, regels gescheiden door naden. Een vergelijking van pakketten wordt op dat label een echte tabel met kruissteken.
- **Do** zet losse prijzen in opgestikte zakken: perzik stof, rondom gestikt, zoomnaad en trensjes, licht gekanteld, zonder schaduw.
- **Do** toon gemaakt werk als projectstrook: klantlap met het screenshot binnen de naden, labelstof met naam, twee zinnen en de link; klantkleur alleen op die lap.
- **Do** laat de naad van de contactbaan alleen in de hero dichtstikken, en sla dat over bij prefers-reduced-motion; ook het zwaaien van het hangkaartje en het dichtstikken van de rijgsteek staan dan uit.
- **Do** laat een sjabloonpatroon alleen zien als verzonnen voorbeeld in de paskamer: een los afdrukje met de balk "Verzonnen voorbeeld", ernaast in gewone woorden wat je ziet, en de oranje rijgsteek om het gekozen patroon.
- **Do** wissel de sectievorm af: de 5fr / 6fr-as mag terugkomen, maar niet elke sectie als kop links, tekst rechts.
- **Do** houd hoeken op 2px en Bree Serif op gewicht 400.

### Don't:
- **Don't** zet een eyebrow, kicker of overline boven een kop, ook niet met streepje, balkje of icoon.
- **Don't** gebruik glans of een reflecterende strook op label, baan of stof.
- **Don't** gebruik gradients.
- **Don't** gebruik glas, blur of doorschijnende lagen.
- **Don't** nummer secties of onderdelen als 01/02/03.
- **Don't** bouw rasters van kaartjes met een icoon erboven.
- **Don't** trek doorlopende sierlijnen of dividers; een lijn is een naad die stof verbindt of begrenst, of hij is er niet.
- **Don't** geef iets een schaduw tenzij een los stuk stof of karton op een ander ligt; gebruik op lichte vlakken de lichte variant.
- **Don't** gebruik oranje als vlak buiten de contactbaan en de contactlap.
- **Don't** zet badges, een "populair"-pakket of doorgestreepte prijzen in een prijsvergelijking.
- **Don't** gebruik de slop-kleuren, kleurverloop, gloed, glas, ronde pillen of de systeemletter buiten de sjabloonsite in de paskamer.

De verboden hierboven gelden overal behalve binnen de verzonnen sjabloonsite, waar ze het voorbeeld zijn (zie The Vreemde-stof Rule bij Colors).
