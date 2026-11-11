import SiteClose from 'src/Components/SiteClose/SiteClose';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import ApproachIntro from './Components/ApproachIntro';
import ApproachStory from './Components/ApproachStory';
import FittingRoom from './Components/FittingRoom';

export default function Approach() {
    useDocumentTitle('Werkwijze');

    return (
        <>
            <ApproachIntro />
            <FittingRoom />
            <ApproachStory />
            <SiteClose
                titleId="approach-close-title"
                title="Zullen we kijken wat bij jouw zaak past?"
                lead="Vertel me over je bedrijf en je klanten, dan denk ik mee. Bellen, mailen of een bericht: wat jij het makkelijkst vindt."
            />
        </>
    );
}
