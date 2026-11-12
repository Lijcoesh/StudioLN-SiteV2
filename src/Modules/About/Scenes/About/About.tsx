import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import AboutOpening from './Components/AboutOpening';
import AboutStory from './Components/AboutStory';

// Over mij: de contactlap staat al in de opening, dus geen afsluiting met een tweede lap.
export default function About() {
    useDocumentTitle('Over mij');

    return (
        <>
            <AboutOpening />
            <AboutStory />
        </>
    );
}
