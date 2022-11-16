import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import HubungiKami from "./pages/HubungKami";
import PantiAsuhanKita from "./pages/PantiAsuhanKita";
import Dashboard from "./pages/Dashboard";

import { BERANDA, HUBUNGI_KAMI, PANTI_ASUHAN_KITA, DASHBOARD } from "./pages/Router";

function App() {
	return (
      <>
         <Routes>
            <Route path={BERANDA} element={<Beranda />} />
            <Route path={HUBUNGI_KAMI} element={<HubungiKami />} />
            <Route path={PANTI_ASUHAN_KITA} element={<PantiAsuhanKita />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
         </Routes>
      </>
	);
}

export default App;
