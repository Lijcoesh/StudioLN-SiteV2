import SiteClose from 'src/Components/SiteClose/SiteClose';
import { pageMeta } from 'src/Config/seo';
import { usePageMeta } from 'src/Hooks/usePageMeta';

import PricingIntro from './Components/PricingIntro';
import PricingPackages from './Components/PricingPackages';

export default function Pricing() {
    usePageMeta(pageMeta.pricing);

    return (
        <>
            <PricingIntro />
            <PricingPackages />
            <SiteClose
                titleId="pricing-close-title"
                title="Twijfel je wat je nodig hebt?"
                lead="Vertel me wat je doet, dan zoeken we samen uit wat bij je past. Bellen, mailen of een bericht: wat jij het makkelijkst vindt."
            />
        </>
    );
}
