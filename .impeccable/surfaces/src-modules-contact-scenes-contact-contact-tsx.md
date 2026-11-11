---
version: 1
slug: "src-modules-contact-scenes-contact-contact-tsx"
primary_target: "src/Modules/Contact/Scenes/Contact/Contact.tsx"
related_targets: []
---

# Contact

Scope: de pagina Contact (`/contact`) van StudioLN V2. Mode: Operate (de bezoeker neemt contact op).

Bezoeker: vakman van 40-50, vaak op de telefoon, komt via menu, contactbaan of "Stuur een bericht" in de afsluiting. Hij ziet in één oogopslag dat bellen, mailen en een bericht sturen alle drie mogen, en gebruikt het kanaal dat hij wil zonder na te denken.

Besloten met Luca (11-11-2026): velden naam, e-mailadres, telefoonnummer (niet verplicht), bericht. Belofte "Je hoort binnen één werkdag van me." Formulier volledig bouwen, gericht op `VITE_CONTACT_ENDPOINT`; zonder endpoint in productie een melding in plaats van velden (lokaal wel het formulier). Opbouw: "Het visitekaartje" uit de surface-ronde, met het kaartje hangend aan een draad zoals in de hangkaartje-optie, alles op het perzik vlak. Kop helemaal navy. Op het kaartje alleen bellen en mailen. Geen afsluiting met de contactlap.

## Direction contract

THESIS: Op het perzik vlak hangt links Luca's visitekaartje aan een oranje draad, met bellen en mailen; rechts zit het formulier in een opgestikte zak. Drie gelijke routes, twee voorwerpen uit dezelfde werkplaats. Weigert het standaard contactblok met icoontjes en een grijs formulier.

OWN-WORLD: Perzik grond onder de canvas-header met pasnaad. Wit kartonnen kaartje met geponst gaatje, slappe oranje draad vanaf een trensje, lichte stof-op-stof-schaduw. Zak van crème labelstof, rondom gestikt, zoomnaad, trensjes, zonder schaduw. Gewone invulvelden, wit, 2px rand. Verstuurknop als oranje lap met naad.

STORY: Hij leest dat hij mag kiezen en binnen een werkdag antwoord krijgt, tikt het nummer of het mailadres op het kaartje aan, of vult vier velden in en verstuurt; hij ziet meteen dat het gelukt is, of hoe hij me anders bereikt.

FIRST VIEWPORT: Header; links h1 "Bel, mail of stuur een bericht." in navy Bree (3 regels), de belofte eronder, daaronder het kaartje aan de draad (-3°). Rechts (6fr) de zak (+1°) met "Stuur een bericht", Naam en E-mailadres naast elkaar, Telefoonnummer, Je bericht, privacyregel en de oranje verstuurknop.

FORM: Het visitekaartje, plaats 2 op de eigen lijst van zeven, seed key b8652ed0; door Luca aangepast (hangend kaartje uit plaats 6, perzik grond). Signature: het kaartje zwaait bij hover of focus naar -1,5°, niet bij prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
