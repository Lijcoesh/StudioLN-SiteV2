---
version: 1
slug: "src-modules-projects-scenes-projects-projects-tsx"
primary_target: "src/Modules/Projects/Scenes/Projects/Projects.tsx"
related_targets: ["src/Config/projects.ts"]
---

# Projecten

Scope: het overzicht Projecten (`/projecten`) van StudioLN V2. Mode: Experience (het werk leidt). Alleen het overzicht; een pagina per project komt later. Tot dan linkt elk project naar de live site.

Bezoeker: vakman van 40-50, vaak op de telefoon, wil zien of het werk goed is en bij hem past. Daarna bekijkt hij de echte site, of belt, mailt of stuurt een bericht via de afsluiting.

Besloten met Luca (11-11-2026): opbouw volgens zijn eigen voorbeeld (V1-achtige stroken: screenshot op een gekleurd vlak links, naam, tekst en link rechts), vertaald naar de werkkleding-wereld. De drie gedobbelde opbouwen (naamlinten, stalenboek, etalage) zijn afgewezen. Klantkleur alleen op de projectlap. Geen browserstipjes; een balk met het domein. Geen "Ontwerp en bouw door StudioLN". Drie plaatshouders (schilder, loodgieter, hovenier) met `placeholder: true`, zichtbaar als plaatshouder, zonder link; weg vóór livegang.

Screenshots: 11-11-2026 vers gemaakt van kamerbreedinterieur.nl en stefvanzanten.nl (1200x750, headless Edge).

Volgorde: canvas met pasnaad, h1 en één zin → perzik vlak (als Over mij op Home) met vijf stroken (Kamerbreed, Stef, drie plaatshouders) → afsluiting met de contactlap (`SiteClose`) → footer.

## Direction contract

THESIS: Elk project is één strook stof over de volle breedte: links een lap in de eigen kleur van de klant met het screenshot erop, rechts crème labelstof met naam, wat het bedrijf doet, wat ik maakte en de link. Weigert het kaartenraster en de wisselende case-study-zigzag.

OWN-WORLD: Perzik vlak onder het canvas (op verzoek van Luca, 11-11-2026, gelijk aan Over mij op Home). Per strook twee aan elkaar gestikte stukken: klantlap (Kamerbreed stone-olijf, Stef lila, plaatshouders labelvouw) en geribde crème labelstof; rondom een naad op 8px, tussen de stukken een verticale naad. Screenshot als los afdrukje met domeinbalk en lichte stof-op-stof-schaduw, helemaal binnen de naden en om en om licht gekanteld. Naam in Bree Serif navy, link oranje onderstreept.

STORY: Hij ziet direct echte sites van echte vakmensen, leest per project in twee zinnen wat het bedrijf doet en wat er gemaakt is, klikt door naar de site, en belt of mailt onderaan.

FIRST VIEWPORT: Canvas met h1 "Projecten" (was "Wat ik gemaakt heb", gewijzigd 12-11-2026), rechts één lead-zin over echte ondernemers en de live adressen van de projecten (uit `src/Config/projects.ts`, geen verzonnen aantallen). Daaronder de eerste strook (Kamerbreed): lap 7fr met screenshot groot, labelstof 5fr met naam, twee zinnen en "Bekijk kamerbreedinterieur.nl". De hele strook is klikbaar; bij hover schuift het screenshot 6px omhoog. Onder md: screenshot boven, tekst eronder.

FORM: Door Luca vastgezet (eigen voorbeeld, overruled de worp), niet uit de eigen lijst van zeven; seed key 3c3d2b23 (surface-roll, afgewezen hand).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
