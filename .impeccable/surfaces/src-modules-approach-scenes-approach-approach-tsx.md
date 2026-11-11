---
version: 1
slug: "src-modules-approach-scenes-approach-approach-tsx"
primary_target: "src/Modules/Approach/Scenes/Approach/Approach.tsx"
related_targets: ["src/Config/story.ts"]
---

# Werkwijze

Scope: de pagina Werkwijze (`/werkwijze`) van StudioLN V2. Mode: Read (de bezoeker moet iets begrijpen).

Bezoeker: vakman van 40-50, vaak op de telefoon, komt via "Lees hoe ik werk" op Home of via het menu. Hij moet snappen waarom sites op elkaar lijken en dat Luca bewust kiest, ook zonder te weten wat een "eyebrow" of "blur" is. Daarna belt, mailt of stuurt hij een bericht via de afsluiting.

Besloten met Luca (11-11-2026): zijn tekst in de ingekorte V1-versie, letterlijk (`src/Config/story.ts`). Dezelfde tweekleurige kop als op Home, hier als h1. Het traject (eerste gesprek tot online) komt later. Opbouw "De paskamer" gekozen uit de surface-ronde. Open punten aan Claude gelaten: verzonnen naam ("Jouw Bedrijf", de balk zegt "verzonnen voorbeeld"), vijf patronen (labeltje boven de kop, kleurverloop in de kop, gloeiende knop, glazen kaarten met icoontjes, alles genummerd; geen "eindeloze pagina"), concept-kop voor de afsluiting (Luca keurt goed).

Volgorde (herzien 11-11-2026 op verzoek van Luca: de tekst voelde verbrokkeld; nu één taak per vlak): canvas met de h1 over de volle breedte en de drie intro-alinea's eronder als één kolom, net als het blok op Home, met vanaf lg rechts ernaast een tweede, realistischer verzonnen voorbeeld (lichte vakmansite "Jouw Klusbedrijf", statisch; op verzoek van Luca 11-11-2026 omdat de rechterkant leeg voelde en het paarse voorbeeld een schoolvoorbeeld is) (het probleem) → perzik vlak met alleen de paskamer (nepsite als los afdrukje, lijstje op labelstof; het bewijs) → wit met "Bij StudioLN doe ik dat liever anders." en de rest van de tekst → afsluiting met de contactlap → footer.

Grenzen: geen nepcijfers, nepreviews of badges in de nepsite. Kleurverloop, gloed en glas bestaan alleen binnen de nepsite (eigen `slop*`-kleuren). Home blijft ongewijzigd.

## Direction contract

THESIS: De pagina is een paskamer: één verzonnen sjabloonsite hangt als los afdrukje op het perzik vlak, en een lijstje op labelstof wijst in gewone woorden aan wat je ziet; een oranje rijgsteek omcirkelt het gekozen patroon. Weigert de geannoteerde screenshot vol labeltjes en het betoog zonder voorbeeld.

OWN-WORLD: Werkkleding: keper-canvas voor de opening, perzik paskamer, geribde crème labelstof met omgeslagen gestikte kanten en naden tussen de regels, wit voor de leestekst. De nepsite is de enige vreemde stof: paars, kleurverloop, glas, gloed, systeemletter. Oranje alleen als draad (rijgsteek, onderstreping, actieve markering).

STORY: Hij leest dat sites op elkaar lijken, ziet meteen zo'n site, tikt de patronen aan en herkent ze; daarna leest hij dat Luca AI als hulpmiddel gebruikt maar zelf kiest, en neemt contact op.

FIRST VIEWPORT: Canvas met pasnaad; h1 "Simpel, / maar nooit standaard." links (tweede zin perzik), daaronder de drie intro-alinea's als één kolom op lead-maat (max 44ch). Daaronder het perzik vlak met het afdrukje links (7fr) en het lijstje rechts (5fr), zonder losse tekst; het eerste patroon staat aan en is omcirkeld.

FORM: De paskamer, plaats 5 op de eigen lijst van zeven, seed key 922acb15 (surface-roll, door Luca gekozen). Signature: de rijgsteek stikt zich om het gekozen patroon (clip van links naar rechts, zoals de baan), niet bij prefers-reduced-motion; het afdrukje blijft op desktop staan terwijl je door het lijstje gaat.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
