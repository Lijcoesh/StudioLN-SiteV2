import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import HomeAbout from './Components/HomeAbout';
import HomeApproach from './Components/HomeApproach';
import HomeClose from './Components/HomeClose';
import HomeHero from './Components/HomeHero';
import HomeServices from './Components/HomeServices';

export default function Home() {
    useDocumentTitle();

    return (
        <>
            <HomeHero />
            <HomeServices />
            <HomeApproach />
            <HomeAbout />
            <HomeClose />
        </>
    );
}
