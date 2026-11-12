import type { AboutFact } from 'src/Definitions/AboutFact';

// Over mij (opbouw "De naamband", 12-11-2026). De kop, de tussenkoppen, inleiding, verhaal en
// feitjes zijn concept tot Luca akkoord geeft; ze gebruiken alleen feiten uit PRODUCT.md. Een
// persoonlijker verhaal en persoonlijke feitjes volgen van Luca: geen persoonlijke feiten
// verzinnen. Staat als openstaand punt in de launch-checklist.

// Twee bijzinnen, elk op een eigen regel; de harde spatie houdt "je" bij het woord erna.
export const aboutTitle = ['Ik maak je website,', 'en ik blijf je aanspreekpunt.'];

export const aboutLead =
    'Ik bouw websites voor ondernemers die zich liever met hun eigen vak bezighouden. Alles wat daarbij komt kijken, regel ik.';

export const aboutStoryTitle = 'Mijn verhaal';

export const aboutStory = [
    'Ik ben Luca, en StudioLN is mijn eenmanszaak. Ik maak websites voor kleine zelfstandigen en lokale vakmannen: mensen die hun werk goed doen en daar een goede website bij willen, zonder zelf te hoeven uitzoeken hoe dat werkt.',
    'Daarom doe ik alles zelf. Ik ontwerp en bouw de site, zet hem op mijn eigen server, regel je domein en je e-mailadres en zorg dat het blijft werken. Je praat dus niet met een wisselend team, maar met mij, van het eerste gesprek tot het onderhoud.',
    'Ik gebruik AI als hulpmiddel om sneller te werken en mijn tarieven laag te houden. Maar wat je site wordt, bepaal ik, samen met jou. Geen standaardtemplate met een ander logo erop. Bel of mail me gerust, dan kijken we wat bij jouw bedrijf past.',
];

export const aboutFactsTitle = 'In het kort';

export const aboutFacts: AboutFact[] = [
    { term: 'Bedrijf', value: 'StudioLN, mijn eenmanszaak' },
    { term: 'Wie je spreekt', value: 'Ik, van het eerste gesprek tot het onderhoud' },
    { term: 'Waar je website draait', value: 'Op mijn eigen server in Amsterdam' },
    { term: 'Reactietijd', value: 'Je hoort binnen één werkdag van me' },
    { term: 'Contact', value: 'Bellen, mailen of het formulier: wat jou het fijnst is' },
];
