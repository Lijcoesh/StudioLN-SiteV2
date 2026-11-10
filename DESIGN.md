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
  pocket:
    backgroundColor: "{colors.peach-soft}"
    textColor: "{colors.text}"
    padding: "40px 36px 36px"
  pocket-panel:
    backgroundColor: "{colors.peach}"
    padding: "48px"
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
- Eén oranje contrastbaan met drie gelijke contactroutes, de enige drager van acties.
- Gestippelde stiknaden als enige lijnen.
- Geweven crème label met omgevouwen, gestikte uiteinden als herkenningsteken.
- Opgestikte zakken in een lichtere tint op een perzik paneel.
- Bree Serif voor koppen, Atkinson Hyperlegible Next voor tekst.
- Eén bewegingsmoment: de naad van de contactbaan stikt zich dicht bij het laden.

## Colors

Huisstijlkleuren van StudioLN (marineblauw, oranje, perzik, wit), gedragen als werkkleding: zwaar donker canvas, één fel contrastvlak, lichte stoffen ertussen.

### Primary
- **Werkjas-oranje** (accent): de contrastbaan. Achtergrond van de contactroutes, onderstreepkleur van tekstlinks, actieve navigatiestreep, focusring op lichte vlakken en tekstcursor. Wit erop haalt 4,6:1.
- **Doorgestikt oranje** (accent-hover): hovertint van een contactroute (wit erop 5,9:1).

### Secondary
- **Werkjas-marineblauw** (navy): canvasgrond onder de keperbinding; kleur van koppen op lichte vlakken; tekstselectie.
- **Diep marineblauw** (navy-deep): alleen als schaduwkleur van stof op stof.
- **Opgehaald marineblauw** (navy-raised): scrollbalkduim.

### Tertiary
- **Perzik paneel** (peach): het paneel waarop de zakken zitten, en de tweede regel van de hero-kop op het canvas.
- **Zakstof** (peach-soft): de opgestikte zakken, het Over mij-vlak en de scrollbalkbaan.

### Neutral
- **Wit** (white): standaard paginagrond en tekst op oranje.
- **Labelcrème** (label): het geweven label, tekst op marineblauw (als on-navy), skiplink.
- **Labelvouw** (label-fold): de omgevouwen uiteinden van het label.
- **Inkt** (text): lopende tekst op lichte vlakken.
- **Grafiet** (graphite): secundaire tekst, de onderregel van het label.
- **Mistblauw** (on-navy-muted): ondertitels en bijtekst op het canvas.
- **Draadkleuren** (stitch-on-navy, stitch-on-light, stitch-on-accent): alleen voor stiknaden en trensjes, één per ondergrond. Ook de hoverstreep in de navigatie gebruikt de draadkleur op marineblauw.
- **Signalen** (error, warning, success): altijd samen met icoon en tekst, nooit alleen kleur.

### Named Rules
**The Contrastbaan Rule.** Oranje als vlak bestaat op één plek: de contactbaan. Elders verschijnt oranje alleen als draad (onderstreping, actieve streep, focusring), nooit als knop, kaart of achtergrond.

**The Draad-per-stof Rule.** Een naad krijgt de draadkleur van de stof waarop hij ligt: stitch-on-navy op canvas, stitch-on-light op perzik/wit/label, stitch-on-accent op de baan.

## Typography

**Display Font:** Bree Serif (met Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next Variable (met system-ui, sans-serif)

**Character:** Bree Serif is de huisstijlletter: stevig, vriendelijk, met de afgeronde schreven van een werkplaatsbord. Atkinson Hyperlegible Next is gekozen voor de doelgroep (40-50+, niet digitaal vaardig): elke letter onderscheidbaar. Beide lokaal via @fontsource.

### Hierarchy
- **Display** (400, clamp 2,75-5,5rem, 1,02): de paginakop. De hero zet het maximum op 5rem zodat beide zinnen vanaf md elk op één regel staan; de tweede zin in perzik.
- **Headline** (400, clamp 2,125-3,375rem, 1,08): sectiekoppen, navy op licht en on-navy op canvas, vaak smal gehouden (11-16ch).
- **Title** (400, clamp 1,5-1,875rem, 1,15): zaktitels. De contactroutes gebruiken Bree Serif op 1,375-1,625rem, de prijsregel 1,375-1,625rem.
- **Title small** (400, 1,375rem, 1,2): kolomkoppen in de footer.
- **Lead** (400, clamp 1,25-1,5rem, 1,5): één ondertitel onder een display- of afsluitkop, max 38-40ch.
- **Body** (400, 1,1875rem, 1,65): lopende tekst, max 58ch; intro's 44ch.
- **Label** (700, 1,0625rem): knoppen en navigatielinks, geen hoofdletters, geen letterspatiëring.

### Named Rules
**The Kop-staat-alleen Rule.** Een kop staat op zichzelf. Geen labeltje erboven; hoort er context bij, dan gaat die in de kop of in de tekst eronder. In de contactbaan staat het werkwoord op dezelfde regel als de waarde ("Bel 06 …").

**The Gewicht-400 Rule.** Bree Serif staat altijd op 400; nadruk komt uit formaat en kleur, niet uit vet.

## Layout

Paginabreedte 1240px inhoud (maximaal 1336px met marges), zijmarges 48px, 32px onder md, 20px onder sm. Spacing volgt de MUI-eenheid van 8px. Secties krijgen 112px verticaal (72px onder md); de hero 72px boven en 96px onder.

Composities zijn asymmetrische tweekoloms rasters: kop links, tekst rechts (5fr / 6fr) of foto links, tekst rechts (4fr / 7fr), onder md één kolom. De hero zet kop en ondertitel links en het label rechts op borsthoogte; onder lg komt het label onder de kop.

Canvasvelden die op elkaar aansluiten houden vaste hoogtes op een veelvoud van 8px (header 96px, 80px onder md), zodat de 8px-kepertegel naadloos doorloopt.

De contactbaan loopt altijd over de volle breedte, met drie gelijke vakken op lg en groter en onder lg drie vakken onder elkaar, elk over de volle breedte en gescheiden door een horizontale naad. Aanklikbare vakken zijn minimaal 56px hoog; contactroutes 112px (98px gestapeld).

## Elevation & Depth

De site is vlak. Diepte bestaat alleen waar stof over stof ligt: het geweven label op het canvas. Verder dragen tint (perzik paneel, lichtere zak) en naden de gelaagdheid.

### Shadow Vocabulary
- **Stof op stof** (`box-shadow: 0 10px 24px rgba(14,34,64,0.45), 0 2px 4px rgba(14,34,64,0.35)`): alleen onder het geweven label.
- **Zacht** (`box-shadow: 0 1px 2px rgba(14,34,64,0.12)`): gemapt op MUI-elevation 1-4; Paper staat standaard op 0, dus in de huidige build niet zichtbaar.

### Named Rules
**The Stof-op-stof Rule.** Een schaduw betekent dat een los stuk stof op een ander ligt. Geen schaduw op zakken, panelen, knoppen of de contactbaan.

## Shapes

Kleding heeft geen afgeronde kaarten: alle hoeken zijn vrijwel recht (2px), panelen en zakken volledig recht. Randen zijn nooit doorgetrokken lijnen maar stiknaden: 2px dik, steek 10px, tussenruimte 7px, ronde uiteinden. Het label staat licht gekanteld (-4°, -2,5° onder lg). Het enige afgeronde element is het LN-logoblok uit de huisstijl.

**The Naad Rule.** De enige lijn op de site is een gestippelde stiknaad, en elke naad verbindt of begrenst een stuk stof: de baan boven en onder, tussen de routes, de zijkanten en zakrand van een zak, de uiteinden van het label, de rand rond de foto, de onderkant van de footer en de items in het menu.

## Components

### Contactbaan
Het signatuurelement en de enige drager van acties. Een oranje band over de volle breedte met een naad boven en onder, en drie gelijke routes: Bel (tel-link), Mail (mailto), Stuur een bericht (naar Contact). Elke route: omlijnd icoon, werkwoord plus waarde in Bree Serif, een pijl. Hover: de route kleurt naar accent-hover en de pijl schuift 6px op (220ms, cubic-bezier(0.16, 1, 0.3, 1)); focus: ring 6px naar binnen. Tussen de routes een verticale naad, gestapeld een horizontale. Staat in de hero en in de afsluiting, in beide gelijk.

**Beweging:** in de hero stikken de naden van de baan zich één keer dicht bij het laden (clip van links naar rechts, 1700ms, 350ms vertraging, cubic-bezier(0.16, 1, 0.3, 1)). Bij prefers-reduced-motion staat de naad er meteen. Dit is het enige bewegingsmoment van de wereld.

### Canvasveld
Marineblauw met een 8px keperbindingtegel (lichte en donkere diagonalen op lage dekking), tekst in on-navy, en `data-surface="dark"` zodat de focusring wit wordt. Grond voor header, hero, afsluiting, footer en het mobiele menu.

### Geweven label
Een geribde crème band (4×6px ribtextuur) met LN-logo, naam in Bree Serif en de regel "websites op maat" in grafiet. De korte kanten zijn 12px omgevouwen (label-fold), met een naad erdoor; alleen daar vastgestikt. Licht gekanteld, met de stof-op-stof-schaduw. Puur herkenning: verborgen voor schermlezers.

### Zakken op een paneel
Een perzik paneel (48px binnenruimte, 24px onder md, 16px onder sm) met opgestikte zakken in peach-soft, twee kolommen, één onder md. Elke zak is aan drie kanten gestikt, heeft bovenaan een dubbele naad als zakrand (6px tussenruimte) en trensjes op de bovenhoeken (3×16px, draadkleur). Geen iconen, geen nummers, geen schaduw.

### Links
Tekstlinks zijn altijd onderstreept (2px, offset 0,22em) in werkjas-oranje en vet; bij hover zakt de streep naar 0,32em. Ze verwijzen door naar pagina's en dragen geen knopvorm.

### Navigation
Header op canvas: woordmerk links, links rechts in 700 op 1,0625rem, minimaal 48px hoog. Hover: streep van 3px in draadkleur op marineblauw; actieve pagina: oranje streep. Onder md een omlijnde Menu-knop (2px rand in draadkleur, 2px hoeken) die een canvaslade van rechts opent met Bree Serif-links op 2rem, gescheiden door naden, en onderaan bellen en mailen.

### Buttons
Alleen de omlijnde knop op canvas (menu openen/sluiten): geen elevatie, 2px hoeken, minimaal 48px hoog. Er bestaat geen gevulde knop; acties lopen via de contactbaan.

### Focus
Ring van 3px in werkjas-oranje met 3px afstand; op canvas in on-navy.

## Do's and Don'ts

### Do:
- **Do** zet elke contactactie in de oranje contactbaan, met de drie routes gelijkwaardig naast elkaar.
- **Do** teken elke lijn als stiknaad (2px, steek 10px, tussenruimte 7px, ronde uiteinden) in de draadkleur van de onderliggende stof.
- **Do** houd aansluitende canvasvelden op een hoogte die een veelvoud van 8px is.
- **Do** bouw gegroepeerde inhoud als zakken op een paneel: lichtere stof, drie gestikte kanten, dubbele zakrand.
- **Do** laat de naad van de contactbaan alleen in de hero dichtstikken, en sla dat over bij prefers-reduced-motion.
- **Do** houd hoeken op 2px en Bree Serif op gewicht 400.

### Don't:
- **Don't** zet een eyebrow, kicker of overline boven een kop, ook niet met streepje, balkje of icoon.
- **Don't** gebruik glans of een reflecterende strook op label, baan of stof.
- **Don't** gebruik gradients.
- **Don't** gebruik glas, blur of doorschijnende lagen.
- **Don't** nummer secties of onderdelen als 01/02/03.
- **Don't** bouw rasters van kaartjes met een icoon erboven.
- **Don't** trek doorlopende sierlijnen of dividers; een lijn is een naad die stof verbindt of begrenst, of hij is er niet.
- **Don't** geef iets een schaduw tenzij een los stuk stof op een ander ligt.
- **Don't** gebruik oranje als vlak buiten de contactbaan.
