import { Route, Routes } from 'react-router';

import Layout from 'src/Components/Layout/Layout';
import { paths } from 'src/Config/navigation';
import Approach from 'src/Modules/Approach/Scenes/Approach/Approach';
import Home from 'src/Modules/Home/Scenes/Home/Home';
import ComingSoon from 'src/Modules/Pages/Scenes/ComingSoon/ComingSoon';
import Pricing from 'src/Modules/Pricing/Scenes/Pricing/Pricing';
import Projects from 'src/Modules/Projects/Scenes/Projects/Projects';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={paths.approach} element={<Approach />} />
                <Route path={paths.pricing} element={<Pricing />} />
                <Route path={paths.projects} element={<Projects />} />
                <Route path={paths.about} element={<ComingSoon title="Over mij" />} />
                <Route path={paths.contact} element={<ComingSoon title="Contact" />} />
                <Route path={paths.privacy} element={<ComingSoon title="Privacyverklaring" />} />
                <Route
                    path="*"
                    element={
                        <ComingSoon
                            title="Deze pagina bestaat niet"
                            message="Misschien is de link verouderd of zit er een typfout in. Ga terug naar de homepagina, of bel of mail me gerust."
                        />
                    }
                />
            </Route>
        </Routes>
    );
}
