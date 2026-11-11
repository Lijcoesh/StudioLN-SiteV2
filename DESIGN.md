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
  button-outlined-on-navy:
    textColor: "{colors.on-navy}"
    rounded: "{rounded.garment}"
    padding: "10px 20px"
    height: "48px"
---

# Design System: StudioLN

## Overview

**Creative North Star: "Werkkleding"**

De site draagt dezelfde kleding als zijn bezoeker: een stevige marineblauwe werkjas met oranje contrastvlakken, zichtbaar gestikt, met het logo als geweven label. Alles wat je ziet is stof, naad of label. Marineblauw canvas met een fijne keperbinding is de grond van de zware delen (header, hero, afsluiting, footer); perzik en wit zijn de lichte vlakken daartussen; één oranje contrastbaan draagt de acties.

De dichtheid is rustig en ruim: grote Bree Serif-koppen, een op leesbaarheid ontworpen tekstletter op 19px, brede secties (112px verticaal). Vormen zijn vrijwel recht (2px), diepte bestaat alleen waar stof over stof ligt. Lijnen zijn altijd stiknaden: gestippeld, met ronde steekuiteinden, en elke naad verbindt of begrenst een stuk stof.

De site weigert het standaard dienstverlenerssjabloon (hero met foto, icoonkaartjes, CTA-band) en elk AI-recept: geen eyebrows, geen glas, geen nummering, geen gradients, geen glans.

**Key Characteristics:**
- Marineblauw keper-canvas als grond voor hero, afsluiting en footer.
- Oranje is de enige drager van acties: de contrastbaan met drie gelijke contactroutes in de hero, en een vastgestikte oranje lap met dezelfde routes in de afsluiting.
- Gestippelde stiknaden als enige lijnen.
- Geweven crème label met omgevouwen, gestikte uiteinden als herkenningsteken.
- Een breed ingenaaid binnenlabel op perzik met wat er in de website zit, met de prijs als wit hangkaartje aan een oranje draad.
- Bree Serif voor koppen, Atkinson Hyperlegible Next voor tekst.
- Eén laadmoment: de naad van de contactbaan stikt zich dicht bij het laden. Verder beweegt alleen wat je aanraakt.

## Colors

Huisstijlkleuren van StudioLN (marineblauw, oranje, perzik, wit), gedragen als werkkleding: zwaar donker canvas, één fel contrastvlak, lichte stoffen ertussen.

### Primary
- **Werkjas-oranje** (accent): de contrastbaan en de contactlap. Achtergrond van de contactroutes, onderstreepkleur van tekstlinks, actieve navigatiestreep, focusring op lichte vlakken en tekstcursor. Wit erop haalt 4,6:1.
- **Doorgestikt oranje** (accent-hover): hovertint van een contactroute (wit erop 5,9:1).

### Secondary
- **Werkjas-marineblauw** (navy): canvasgrond onder de keperbinding; kleur van koppen op lichte vlakken; tekstselectie.
- **Diep marineblauw** (navy-deep): alleen als schaduwkleur van stof op stof.
- **Opgehaald marineblauw** (navy-raised): scrollbalkduim.

### Tertiary
- **Perzik paneel** (peach): de grond onder het binnenlabel en het Over mij-vlak, het gaatje in het hangkaartje, en de tweede zin van de tweekleurige koppen op het canvas (hero en "Simpel, maar nooit standaard.").
- **Zakstof** (peach-soft): de opgestikte lap onder de foto bij Over mij en de scrollbalkbaan.

### Neutral
- **Wit** (white): standaard paginagrond, tekst op oranje en het karton van het hangkaartje.
- **Labelcrème** (label): het geweven label en het binnenlabel, tekst op marineblauw (als on-navy), skiplink.
- **Labelvouw** (label-fold): de omgevouwen uiteinden van beide labels.
- **Inkt** (text): lopende tekst op lichte vlakken.
- **Grafiet** (graphite): secundaire tekst, de onderregel van het label, de makersregel op het binnenlabel en de kleine regels op het hangkaartje.
- **Mistblauw** (on-navy-muted): ondertitels en bijtekst op het canvas.
- **Draadkleuren** (stitch-on-navy, stitch-on-light, stitch-on-accent): alleen voor stiknaden en trensjes, één per ondergrond. Ook de hoverstreep in de navigatie gebruikt de draadkleur op marineblauw.
- **Signalen** (error, warning, success): altijd samen met icoon en tekst, nooit alleen kleur.

### Named Rules
**The Contrastbaan Rule.** Oranje als vlak bestaat alleen waar de contactroutes staan: de contactbaan in de hero en de contactlap in de afsluiting. Elders verschijnt oranje alleen als draad (onderstreping, actieve streep, focusring, de draad waaraan het hangkaartje hangt, de geborduurde naam op de naamband), nooit als knop, kaart of achtergrond.

**The Draad-per-stof Rule.** Een naad krijgt de draadkleur van de stof waarop hij ligt: stitch-on-navy op canvas, stitch-on-light op perzik/wit/label, stitch-on-accent op de baan.

## Typography

**Display Font:** Bree Serif (met Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next Variable (met system-ui, sans-serif)

**Character:** Bree Serif is de huisstijlletter: stevig, vriendelijk, met de afgeronde schreven van een werkplaatsbord. Atkinson Hyperlegible Next is gekozen voor de doelgroep (40-50+, niet digitaal vaardig): elke letter onderscheidbaar. Beide lokaal via @fontsource.

### Hierarchy
- **Display** (400, clamp 2,75-5,5rem, 1,02): de paginakop. De hero zet het maximum op 5rem zodat beide zinnen vanaf md elk op één regel staan; de tweede zin in perzik.
- **Headline** (400, clamp 2,125-3,375rem, 1,08): sectiekoppen, navy op licht en on-navy op canvas, vaak smal gehouden (11-18ch). Een sectiekop mag als groot moment de display-maten dragen (een h2 in de h1-stijl), zoals "Simpel, maar nooit standaard." op het canvas, met de tweede zin in perzik net als in de hero.
- **Title** (400, clamp 1,5-1,875rem, 1,15): de regeltitels op het binnenlabel. De naam op het binnenlabel staat op 1,875rem; de contactroutes gebruiken Bree Serif op 1,375-1,625rem.
- **Price** (400, 3,25rem, 1): het bedrag op het hangkaartje, in navy, met "Een website vanaf" en "excl. btw" in grafiet op 1,0625rem eromheen.
- **Title small** (400, 1,375rem, 1,2): kolomkoppen in de footer.
- **Lead** (400, clamp 1,25-1,5rem, 1,5): één ondertitel onder een display- of afsluitkop, max 38-40ch.
- **Body** (400, 1,1875rem, 1,65): lopende tekst, max 58ch; intro's 44ch.
- **Label** (700, 1,0625rem): knoppen en navigatielinks, geen hoofdletters, geen letterspatiëring.

### Named Rules
**The Kop-staat-alleen Rule.** Een kop staat op zichzelf. Geen labeltje erboven; hoort er context bij, dan gaat die in de kop of in de tekst eronder. In de contactbaan staat het werkwoord op dezelfde regel als de waarde ("Bel 06 …").

**The Gewicht-400 Rule.** Bree Serif staat altijd op 400; nadruk komt uit formaat en kleur, niet uit vet.

## Layout

Paginabreedte 1240px inhoud (maximaal 1336px met marges), zijmarges 48px, 32px onder md, 20px onder sm. Spacing volgt de MUI-eenheid van 8px. Secties krijgen 112px verticaal (72px onder md); de hero 72px boven en 96px onder.

Composities zijn asymmetrisch, maar niet elke sectie krijgt dezelfde vorm. Het 5fr / 6fr-raster (kolomafstand 64px) is de gedeelde as: de dienstensectie zet daarop kop links en intro rechts boven het binnenlabel; "Simpel, maar nooit standaard." staat als display-kop over de volle breedte op het canvas, met een naad bovenaan, en alleen de tekst eronder hangt in de 6fr-kolom. Over mij zet de foto links en de tekst rechts op het 5fr / 6fr-raster. Onder md is alles één kolom. De hero zet kop en ondertitel links en het label rechts op borsthoogte; onder lg komt het label onder de kop.

Het binnenlabel loopt over de volle inhoudsbreedte, met binnenruimte 52px boven, 72px opzij en 24px onder (44 / 40 / 16px onder md, 40 / 28 / 8px onder sm). Het perzik vlak eronder houdt onderaan ruimte vrij voor het hangkaartje (336px, 368px onder md). Het canvasmoment krijgt 128px verticaal (80px onder md).

Canvasvelden die op elkaar aansluiten houden vaste hoogtes op een veelvoud van 8px (header 96px, 80px onder md), zodat de 8px-kepertegel naadloos doorloopt.

De afsluiting zet kop en ondertitel links en de contactlap rechts op het 5fr / 6fr-raster, verticaal gecentreerd; onder lg komt de lap onder de kop, over de volle inhoudsbreedte. Onder de afsluiting begrenst een naad op canvas (binnen de paginabreedte) de overgang naar de footer.

De contactbaan loopt altijd over de volle breedte, met drie gelijke vakken op lg en groter en onder lg drie vakken onder elkaar, elk over de volle breedte en gescheiden door een horizontale naad. Aanklikbare vakken zijn minimaal 56px hoog; contactroutes 112px (98px gestapeld).

## Elevation & Depth

De site is vlak. Diepte bestaat alleen waar een los stuk stof of karton op een ander ligt: het geweven label op het canvas, het binnenlabel op het perzik vlak en het hangkaartje eronder. Wat vastgestikt is (de lap onder de foto, de naamband) krijgt geen schaduw; daar dragen tint en naden de gelaagdheid.

### Shadow Vocabulary
- **Stof op stof** (`box-shadow: 0 10px 24px rgba(14,34,64,0.45), 0 2px 4px rgba(14,34,64,0.35)`): onder het geweven label op het canvas.
- **Stof op licht** (`box-shadow: 0 10px 24px rgba(14,34,64,0.16), 0 2px 4px rgba(14,34,64,0.12)`): dezelfde schaduw op een licht vlak, onder het binnenlabel en het hangkaartje op perzik.
- **Zacht** (`box-shadow: 0 1px 2px rgba(14,34,64,0.12)`): gemapt op MUI-elevation 1-4; Paper staat standaard op 0, dus in de huidige build niet zichtbaar.

### Named Rules
**The Stof-op-stof Rule.** Een schaduw betekent dat een los stuk stof of karton op een ander ligt: de labels en het hangkaartje. Op canvas de zware variant, op een licht vlak de lichte. Geen schaduw op vastgestikte lappen, vlakken, knoppen, de contactbaan of de contactlap.

## Shapes

Kleding heeft geen afgeronde kaarten: alle hoeken zijn vrijwel recht (2px), vlakken, labels en het kaartje volledig recht. Randen zijn nooit doorgetrokken lijnen maar stiknaden: 2px dik, steek 10px, tussenruimte 7px, ronde uiteinden. Losse stukken staan licht gekanteld: het hero-label (-4°, -2,5° onder lg), het hangkaartje (-4°, -3° onder md), de lap onder de foto (-1,5°) en de naamband op die lap (+3°). Het binnenlabel ligt recht. Omgevouwen korte kanten zijn 12px op het hero-label en 16px op het binnenlabel. Afgerond zijn alleen het LN-logoblok uit de huisstijl en het geponste gaatje in het hangkaartje (14px rond, rand 2px in draadkleur).

**The Naad Rule.** De enige getekende lijn op de site is een gestippelde stiknaad, en elke naad verbindt of begrenst een stuk stof: de baan boven en onder, tussen de routes, de uiteinden en de bovenrand van een label, de regels op het binnenlabel, de rand rond de foto en rond de naamband, de bovenrand van het canvasmoment, de onderkant van de footer en de items in het menu. De draad van het hangkaartje is geen lijn maar garen: één doorlopende, slappe oranje draad.

## Components

### Contactbaan
Het signatuurelement en de enige drager van acties. Een oranje band over de volle breedte met een naad boven en onder, en drie gelijke routes: Bel (tel-link), Mail (mailto), Stuur een bericht (naar Contact). Elke route: omlijnd icoon, werkwoord plus waarde in Bree Serif, een pijl. Hover: de route kleurt naar accent-hover en de pijl schuift 6px op (220ms, cubic-bezier(0.16, 1, 0.3, 1)); focus: ring 6px naar binnen. Tussen de routes een verticale naad, gestapeld een horizontale. Staat alleen in de hero; de afsluiting gebruikt de contactlap.

### Contactlap
De afsluiting herhaalt de baan niet, maar zet dezelfde drie routes op een oranje lap naast de kop: recht, zonder schaduw, rondom vastgestikt met een naad in stitch-on-accent op 8px van de rand. De routes staan onder elkaar, gescheiden door naden die van zijnaad tot zijnaad lopen; per route icoon, werkwoord plus waarde in Bree Serif (clamp 1,375-1,75rem) en de pijl rechts uitgelijnd. Hover en focus als bij de baan (accent-hover, pijl 6px, ring 6px naar binnen). Elke route minimaal 98px hoog. Geen laadanimatie.

**Beweging:** in de hero stikken de naden van de baan zich één keer dicht bij het laden (clip van links naar rechts, 1700ms, 350ms vertraging, cubic-bezier(0.16, 1, 0.3, 1)). Bij prefers-reduced-motion staat de naad er meteen. Dit is het enige laadmoment van de wereld; verder beweegt alleen wat je aanraakt (contactroute, tekstlink, hangkaartje).

### Canvasveld
Marineblauw met een 8px keperbindingtegel (lichte en donkere diagonalen op lage dekking), tekst in on-navy, en `data-surface="dark"` zodat de focusring wit wordt. Grond voor header, hero, afsluiting, footer en het mobiele menu.

### Geweven label
Een geribde crème band (4×6px ribtextuur) met LN-logo, naam in Bree Serif en de regel "websites op maat" in grafiet. De korte kanten zijn 12px omgevouwen (label-fold), met een naad erdoor; alleen daar vastgestikt. Licht gekanteld, met de stof-op-stof-schaduw. Puur herkenning: verborgen voor schermlezers.

### Binnenlabel
Een breed ingenaaid label op het perzik vlak, van dezelfde geribde crème stof als het hero-label maar met een zachtere rib (label-rib-soft, 4×6px), zodat het grote vlak crème blijft. Bovenaan ingestikt met een naad tussen de vouwen, korte kanten 16px omgeslagen (label-fold) met een naad erdoor, recht en met de lichte stof-op-stof-schaduw. Kop van het label: LN-logo (44px), StudioLN in Bree Serif op 1,875rem en "gemaakt op maat, door Luca" in grafiet, afgesloten met een naad. Daaronder de diensten als echte lijst: titel (h3) plus tekst (max 46ch), twee kolommen vanaf lg en één daaronder, regels gescheiden door naden. Geen iconen, geen nummers.

### Hangkaartje
Een wit kartonnen kaartje (288px, 260px onder sm) dat aan de onderrand van het binnenlabel hangt, rechts op desktop en links onder md. Een slappe oranje draad (2px, ronde uiteinden, als SVG getekend) loopt door een geponst gaatje bovenin. Het kaartje hangt op -4° (-3° onder md) en zwaait bij hover of focus naar -1,5° (420ms, cubic-bezier(0.16, 1, 0.3, 1)); bij prefers-reduced-motion beweegt het niet. Inhoud: "Een website vanaf", het bedrag in de Price-stap, "excl. btw" en de tekstlink "Bekijk alle prijzen". Het hele kaartje is één link naar Prijzen; de onderstreping zakt mee bij hover en focus. Lichte stof-op-stof-schaduw.

### Fotolap
De foto bij Over mij staat groot (tot 480px breed, 360px onder md, foto 4:5) op een opgestikt stuk zakstof (peach-soft) op het perzik vlak: 20px rand, rondom gestikt op 8px van de rand, -1,5° gekanteld. Over de rechteronderhoek is een naamband gestikt: een strook marineblauw keper-canvas met een naad rondom (stitch-on-navy, 6px van de rand), +3° gekanteld, met "Luca" in Bree Serif (2,75rem, 2,125rem onder sm) geborduurd in oranje draad. Lap en band zijn vastgestikt en hebben geen schaduw; de band is voor schermlezers verborgen omdat de naam al in de kop staat. Geen verdere decoratie: de persoon staat voorop.

### Links
Tekstlinks zijn altijd onderstreept (2px, offset 0,22em) in werkjas-oranje en vet; bij hover zakt de streep naar 0,32em. Ze verwijzen door naar pagina's en dragen geen knopvorm.

### Navigation
Header op canvas: woordmerk links, links rechts in 700 op 1,0625rem, minimaal 48px hoog. Hover: streep van 3px in draadkleur op marineblauw; actieve pagina: oranje streep. Onder md een omlijnde Menu-knop (2px rand in draadkleur, 2px hoeken) die een canvaslade van rechts opent met Bree Serif-links op 2rem, gescheiden door naden, en onderaan bellen en mailen.

### Buttons
Alleen de omlijnde knop op canvas (menu openen/sluiten): geen elevatie, 2px hoeken, minimaal 48px hoog. Er bestaat geen gevulde knop; acties lopen via de contactbaan en de contactlap.

### Focus
Ring van 3px in werkjas-oranje met 3px afstand; op canvas in on-navy.

## Do's and Don'ts

### Do:
- **Do** zet elke contactactie op oranje: in de contactbaan (hero) of de contactlap (afsluiting), met de drie routes altijd gelijkwaardig.
- **Do** teken elke lijn als stiknaad (2px, steek 10px, tussenruimte 7px, ronde uiteinden) in de draadkleur van de onderliggende stof.
- **Do** houd aansluitende canvasvelden op een hoogte die een veelvoud van 8px is.
- **Do** zet een opsomming van wat de klant krijgt op een ingenaaid label: geribde crème stof, omgeslagen gestikte korte kanten, regels gescheiden door naden.
- **Do** laat de naad van de contactbaan alleen in de hero dichtstikken, en sla dat over bij prefers-reduced-motion; ook het zwaaien van het hangkaartje staat dan uit.
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
