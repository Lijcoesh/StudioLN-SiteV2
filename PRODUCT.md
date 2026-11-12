# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Kleine zelfstandige ondernemers, vooral lokale vakmannen (loodgieters, schilders en dergelijke) van rond de 40 à 50 jaar, met weinig kennis van internet en websites. Ze willen een website (of een betere) en alles daaromheen het liefst volledig uit handen geven: ontwerp, bouw, hosting, domein, e-mail en onderhoud.

Ze komen op de site om te beoordelen of StudioLN iets voor hen is: wat het oplevert, wat het kost, wat er al gemaakt is en wie er achter zit. Daarna bellen, mailen of vullen ze het contactformulier in. Webdesign-jargon kennen ze niet; wat ze niet begrijpen, slaan ze over of wantrouwen ze.

## Product Purpose

De eigen website van StudioLN, de eenmanszaak van Luca: websites op maat bouwen en hosten voor kleine ondernemers. De site laat zien wat StudioLN doet en kost, toont gemaakt werk, stelt Luca voor en levert contact op. Succes is een bezoeker die belt, mailt of het contactformulier invult.

Pagina's: **Home**, **Werkwijze**, **Prijzen**, **Projecten** (overzicht plus een pagina per project), **Over mij** en **Contact** (besloten 10-11-2026). Gemaakt werk staat alleen op Projecten, niet op Home.

Dit is V2. V1 (`F:\Development\StudioLN-Site`) is afgebouwd tot een nette maar te standaard dienstverlenerssite; daarom opnieuw (10-11-2026). Productfeiten uit V1 gaan mee, het ontwerp niet.

## Positioning

**Simpel, maar nooit standaard.** Geen template met een ander logo erop en geen designtrends om de trend: elke site wordt afgestemd op het bedrijf, het verhaal en de mensen erachter. Luca gebruikt AI als hulpmiddel om efficiënt te werken en zijn tarieven toegankelijk te houden, maar het ontwerp komt uit zijn eigen keuzes.

Daarnaast doet hij het hele traject zelf, op zijn eigen server: ontwerp, bouw, hosting, domein, zakelijke e-mail en onderhoud. De klant heeft één aanspreekpunt en hoeft zich niet met techniek bezig te houden.

De site zelf is het bewijs: hij moet eruitzien als bewuste keuzes, niet als de AI-template die Luca's tekst bekritiseert.

## Operating Context

- Bezoekers komen via via, via een link uit een gesprek of offerte, of zoeken StudioLN op. Waarschijnlijk veel op de telefoon.
- De site draait op Luca's eigen TransIP-VPS (Caddy), naast de klantsites, op `studioln.nl`. Het dashboard staat op `dashboard.studioln.nl`.
- Het contactformulier verstuurt via een eigen API in `server/` van deze repo, net als bij WaterZacht en Kamerbreed, en niet via de dashboard-API (besloten 12-11-2026). De API mailt het bericht via Brevo (afzender `noreply@studioln.nl`) naar `contact@studioln.nl` en slaat niets op.
- Na een eerste contact volgt een offerte vanuit het dashboard (met algemene voorwaarden, verwerkersovereenkomst en privacyverklaring als PDF). Klanten kunnen zakelijk of particulier zijn.

## Capabilities and Constraints

- **Werkwijze-pagina** (besloten 10-11-2026): draagt Luca's tekst "Simpel, maar nooit standaard." in de ingekorte V1-versie (zie Evidence), met een verzonnen voorbeeldsite die de patronen uit de tekst aanwijst (opbouw "De paskamer", gekozen 11-11-2026). Het traject van eerste gesprek tot online komt later op deze pagina, als Luca de stappen heeft vastgelegd (besloten 11-11-2026). Het woord "AI" staat niet in het menu: een menu-item "AI" kan bij deze doelgroep wantrouwen wekken. De kern van de tekst komt in een paar zinnen op Home, met een verwijzing naar Werkwijze.
- **Prijzen staan op een eigen pagina Prijzen** (besloten 10-11-2026; bedragen bijgewerkt naar de dashboardcatalogus op 11-11-2026). Alleen bedragen excl. btw, en dat staat erbij.
  - Website Basis (ontwerp en bouw): € 500 eenmalig (geen "vanaf"; besloten 11-11-2026)
  - Installatie & domeinkoppeling: € 100 eenmalig
  - Zakelijke e-mail instellen: € 75; migreren: € 100; e-mailhosting: € 10 per maand
  - Pakketten per maand: Basis € 25 (hosting, formuliermailing), Plus € 35 (+ bestel- en bevestigingsmails € 10, website statistieken € 7,50), Compleet € 49,50 (+ e-mailautomatisering € 15, 1 uur per maand € 35). Op de site per pakket een feitelijke los-prijs (Plus € 42,50, Compleet € 92,50); geen "voordeel"-badge of doorgestreepte prijs.
  - Uurtarief voor aanpassingen en extra werk: € 35
  - Prijzen veranderen in het dashboard; de site volgt die, niet andersom.
- **Projecten**: eerst een overzicht; de bezoeker klikt een project aan en krijgt dan een eigen pagina met wat er over dat project te vertellen is. Het overzicht staat (11-11-2026); tot de projectpagina's er zijn linkt elk project naar de live site (nieuw tabblad).
- **Contact**: formulier plus e-mail en telefoon, alle drie gelijkwaardig (geen ervan nadrukkelijker dan de andere; besloten 10-11-2026). Geen straatadres en geen plaats op de site. Formuliervelden: naam, e-mailadres, telefoonnummer (niet verplicht) en bericht; niets meer. Belofte: "Je hoort binnen één werkdag van me" (besloten 11-11-2026). Het formulier staat aan en post naar `/api/contact-messages` (12-11-2026). Opbouw "Het visitekaartje" op het perzik vlak, met het kaartje hangend aan een draad zoals bij de hangkaartje-optie (gekozen 11-11-2026).
- **Taal**: Nederlands, ik-vorm.
- **Hosting**: eigen VPS. GitHub Pages-preview pas na Luca's akkoord.
- **Niet overgenomen uit V1**: het idee van een stijlkiezer (de site in meerdere stijlen tonen). Niet bouwen zonder nieuw akkoord.

## Brand Commitments

De huisstijl van StudioLN ligt vast (sinds 28-10-2026, vastgelegd in het dashboard; voor de site bevestigd 10-11-2026):

- **Kleuren**: het palet van het dashboard (`F:\Development\StudioLN-Dashboard\src\colors.ts`): marineblauw `#132B4F`, oranje `#C4531A`, perzik `#F8DCC8`, wit, plus de bijbehorende papier- en inkttinten.
- **Logo**: het LN-logo en het woordmerk (SVG in `StudioLN-Dashboard/public/favicon.svg` en `src/Components/Wordmark/Wordmark.tsx`).
- **Bree Serif** voor het woordmerk en de koppen.
- **Verder niets uit het dashboard**: geen layout, componenten, kasboek-look of andere styling. Luca is geen fan van de dashboardstijl; die is alleen voor hemzelf. Het tekstfont naast Bree Serif ligt voor de site niet vast.

Stem: eerlijk, direct, persoonlijk, in de ik-vorm. Geen verkooppraat en geen webdesign-jargon richting de bezoeker.

Uniek, maar niet extreem: V1 was te standaard, maar concept- of thema-indelingen (borden, theater, doka en dergelijke) en een experimentele homepage zijn in V1 al afgewezen. De bezoeker moet de opbouw direct herkennen en de weg vinden; het eigen karakter zit in de uitvoering.

Herkenbare AI-designpatronen zijn het allerlaatste wat Luca wil. Naast wat zijn eigen tekst noemt (eyebrow-tekstjes, glazen kaarten met blur, genummerde onderdelen 01/02/03, één eindeloos scrollende pagina) zijn in V1 ook afgewezen: losse icoonkaartjes, getinte icoontegels, gradients, glans en "meest gekozen"-badges. Bij twijfel gaat dat boven de standaardconventie.

## Evidence on Hand

- **Werkwijze-tekst** van Luca (origineel, opnieuw aangeleverd 10-11-2026). In V1 stond een met zijn akkoord ingekorte versie (`StudioLN-Site/src/Config/story.ts`); op 11-11-2026 koos Luca die ingekorte versie voor de Werkwijze-pagina (letterlijk overnemen uit `story.ts`, niet herschrijven zonder te vragen). Het origineel ter referentie:

  > # Simpel, maar nooit standaard.
  >
  > Laten we eerlijk zijn: steeds meer websites beginnen verdacht veel op elkaar te lijken.
  >
  > Een klein eyebrow-tekstje boven iedere kop, glazen kaarten met een subtiel blur-effect, onderdelen netjes genummerd met 01, 02 en 03 en alles op één eindeloos scrollende pagina. Je kent het inmiddels wel.
  >
  > Het lijkt soms alsof er één ongeschreven handleiding bestaat voor hoe een moderne website eruit moet zien. Veel websites volgen tegenwoordig dezelfde trends en lijken daardoor rechtstreeks uit dezelfde AI-template te komen, telkens opnieuw in een net iets ander jasje.
  >
  > Bij StudioLN doe ik dat liever anders.
  >
  > Begrijp me niet verkeerd: ik ben absoluut geen tegenstander van AI. Integendeel. Ik maak er zelf volop gebruik van. Het stelt me in staat om efficiënter te werken, sneller te ontwikkelen en mijn tarieven toegankelijk te houden.
  >
  > Maar er is een verschil tussen AI gebruiken als hulpmiddel en AI het volledige creatieve proces laten bepalen.
  >
  > Een website moet meer zijn dan een verzameling populaire designtrends. Het moet passen bij het bedrijf, het verhaal en de mensen erachter. Daarom kijk ik naar wat een bedrijf nodig heeft en maak ik bewuste keuzes in vorm, kleur, indeling en functionaliteit. Niet omdat een bepaalde stijl op dit moment populair is, maar omdat het ontwerp er daadwerkelijk beter van wordt.
  >
  > Geen standaardtemplate met een ander logo erop. Geen designtrends om het design. Gewoon een goed doordachte, professionele website met een eigen uitstraling.
  >
  > **De efficiëntie van AI, gecombineerd met mijn eigen oog voor design. Zo ontstaat een website met een eigen karakter.**

- **Projecten** (vrijgegeven in V1): Kamerbreed Interieur (`kamerbreedinterieur.nl`; vloeren en raambekleding in het Westland) en Stef van Zanten (`stefvanzanten.nl`; portfolio van een maker van video, muziek, audio en graphics). Projectteksten komen uit V1; de screenshots zijn op 11-11-2026 vers gemaakt van de live sites (`src/Resources/Projects/`, data in `src/Config/projects.ts`). WaterZacht, LMVW en andere projecten niet tonen tot Luca ze vrijgeeft.
- **Bedrijfsgegevens**: e-mail `contact@studioln.nl`, telefoon 06 11 22 39 04, KvK 42211223. Btw-id volgt nog; niet verzinnen.
- **Juridisch**: privacyverklaring en algemene voorwaarden bestaan als concept in `StudioLN-Dashboard/StudioLN.API/Resources/Terms/`.
- **Over mij**: de foto is van Luca (`src/Resources/Images/luca.jpg`, de enige foto voor deze pagina). Eigen tekst volgt: een verhaal plus een paar losse feitjes (besloten 12-11-2026); tot dan lorem ipsum, geen persoonlijke feiten verzinnen, vóór livegang vervangen. De pagina moet laten zien: een echt persoon, die alles zelf regelt, kleine bedrijven snapt en die je gewoon kunt bellen. Opbouw "De naamband" gekozen (12-11-2026), met de drie contactroutes in de lap bovenaan en zonder afsluiting onderaan.
- Er zijn **geen** testimonials, reviews, klantaantallen of andere cijfers. Niet verzinnen.

## Product Principles

1. **Je vindt altijd de weg.** Weinig tegelijk, duidelijke navigatie, elke pagina heeft één taak. Een vakman zonder internetkennis moet zonder nadenken weten waar hij is en wat hij kan doen.
2. **De site is het bewijs.** Hij doet wat de Werkwijze-tekst belooft: bewuste keuzes, geen trendrecept. Wat die tekst bekritiseert, komt er niet in.
3. **Uniek in de uitvoering, vertrouwd in de opbouw.** Eigen karakter zonder dat de bezoeker moet puzzelen. Niet zo standaard als V1, niet zo experimenteel als de afgewezen conceptindelingen.
4. **Eerlijk over wat het kost en wat er is.** Prijzen zichtbaar, alleen echt werk, geen opgeblazen claims.
5. **Spreek de taal van de klant.** Uitleggen in gewone woorden wat de bezoeker eraan heeft; geen vaktermen zonder uitleg.

## Accessibility & Inclusion

WCAG 2.2 AA als minimum (zie de launch-checklist): contrast, toetsenbordbediening met zichtbare focus, skip-link, alt-teksten en `prefers-reduced-motion` respecteren. De doelgroep is 40-50+ en niet digitaal vaardig: ruime leesbare tekstgrootte, duidelijke klikbare elementen die er ook klikbaar uitzien, en telefoonnummer en e-mail direct aan te tikken.
