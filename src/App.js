import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import HubungiKami from "./pages/HubungKami";
import PantiAsuhanKita from "./pages/PantiAsuhanKita";
import Dashboard from "./pages/Dashboard";
import { BERANDA, HUBUNGI_KAMI, PANTI_ASUHAN_KITA, DASHBOARD, TENTANG_KAMI,KELOLA_PROFILE_DETAIL_PROFILE, KELOLA_PROFILE_DONASI,KELOLA_PROFILE_JADI_RELAWAN } from "./pages/Router";
import TentangKami from "./pages/TentangKami";
import KelolaProfileDetailProfile from "./pages/KelolaProfileDetailProfile";
import KelolaProfileDonasi from "./pages/KelolaProfileDonasi";
import KelolaProfileJadiRelawan from "./pages/KelolaProfileJadiRelawan";
import DetailProfilePanti from "./pages/DetailProfilePanti";
import DonasiKita from "./pages/DonasiKita";

function App() {
	return (
      <>
         <Routes>
            <Route path={BERANDA} element={<Beranda />} />
            <Route path={HUBUNGI_KAMI} element={<HubungiKami />} />
            <Route path={PANTI_ASUHAN_KITA} element={<PantiAsuhanKita />} />
            <Route path={TENTANG_KAMI} element={<TentangKami />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
            <Route path={KELOLA_PROFILE_DETAIL_PROFILE} element={<KelolaProfileDetailProfile />} />
            <Route path={KELOLA_PROFILE_DONASI} element={<KelolaProfileDonasi />} />
            <Route path={KELOLA_PROFILE_JADI_RELAWAN} element={<KelolaProfileJadiRelawan />} />
            <Route path="/detail-profile-panti/:string" element={<DetailProfilePanti/>}/>
            <Route path="/donasi-kita" element={<DonasiKita/>}/>
         </Routes>
      </>
	);
}

export default App;
