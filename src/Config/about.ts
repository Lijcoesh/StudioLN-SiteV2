import type { AboutFact } from 'src/Definitions/AboutFact';

// Over mij (opbouw "De naamband", 12-11-2026). De kop, de tussenkoppen en de drie ingevulde
// feitjes zijn concept tot Luca akkoord geeft. Inleiding, verhaal en de plaatshouders wachten op
// Luca's eigen tekst: geen persoonlijke feiten verzinnen. Staat als openstaand punt in de
// launch-checklist.

// Twee bijzinnen, elk op een eigen regel; de harde spatie houdt "je" bij het woord erna.
export const aboutTitle = ['Ik maak je website,', 'en ik blijf je aanspreekpunt.'];

export const aboutLead =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.';

export const aboutStoryTitle = 'Mijn verhaal';

export const aboutStory = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
];

export const aboutFactsTitle = 'In het kort';

export const aboutFacts: AboutFact[] = [
    { term: 'Bedrijf', value: 'StudioLN, mijn eenmanszaak' },
    { term: 'Wie je spreekt', value: 'Ik, van het eerste gesprek tot het onderhoud' },
    { term: 'Waar je website draait', value: 'Op mijn eigen server in Amsterdam' },
    { term: 'Nog in te vullen', value: 'Een feitje van Luca volgt', placeholder: true },
    { term: 'Nog in te vullen', value: 'Een feitje van Luca volgt', placeholder: true },
];
