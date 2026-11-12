import { pageMeta } from 'src/Config/seo';
import { usePageMeta } from 'src/Hooks/usePageMeta';

import HomeAbout from './Components/HomeAbout';
import HomeApproach from './Components/HomeApproach';
import HomeClose from './Components/HomeClose';
import HomeHero from './Components/HomeHero';
import HomeServices from './Components/HomeServices';

export default function Home() {
    usePageMeta(pageMeta.home);

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
