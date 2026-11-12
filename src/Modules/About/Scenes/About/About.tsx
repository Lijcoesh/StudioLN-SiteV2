import { pageMeta } from 'src/Config/seo';
import { usePageMeta } from 'src/Hooks/usePageMeta';

import AboutOpening from './Components/AboutOpening';
import AboutStory from './Components/AboutStory';

// Over mij: de contactlap staat al in de opening, dus geen afsluiting met een tweede lap.
export default function About() {
    usePageMeta(pageMeta.about);

    return (
        <>
            <AboutOpening />
            <AboutStory />
        </>
    );
}
