import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import HomeAbout from './Components/HomeAbout';
import HomeApproach from './Components/HomeApproach';
import HomeApproachCentered from './Components/HomeApproachCentered';
import HomeClose from './Components/HomeClose';
import HomeHero from './Components/HomeHero';
import HomeServices from './Components/HomeServices';

export default function Home() {
    useDocumentTitle();

    return (
        <>
            <HomeHero />
            <HomeServices />
            {/* Tijdelijk: variant 1 en 4 onder elkaar om te kiezen */}
            <HomeApproach />
            <HomeApproachCentered />
            <HomeAbout />
            <HomeClose />
        </>
    );
}
