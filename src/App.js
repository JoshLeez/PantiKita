import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import HubungiKami from "./pages/HubungKami";
import PantiAsuhanKita from "./pages/PantiAsuhanKita";
import Dashboard from "./pages/Dashboard";
import { BERANDA, HUBUNGI_KAMI, PANTI_ASUHAN_KITA, DASHBOARD, TENTANG_KAMI,KELOLA_PROFILE_DETAIL_PROFILE, KELOLA_PROFILE_DONASI,KELOLA_PROFILE_JADI_RELAWAN, KELOLA_DATA_ANAK_ASUH, KELOLA_DATA_PENGURUS, KELOLA_DATA_KEUANGAN, KELOLA_DATA_DONASI, DATA_RELAWAN} from "./pages/Router";
import TentangKami from "./pages/TentangKami";
import KelolaProfileDetailProfile from "./pages/KelolaProfileDetailProfile";
import KelolaProfileDonasi from "./pages/KelolaProfileDonasi";
import KelolaProfileJadiRelawan from "./pages/KelolaProfileJadiRelawan";
import DetailProfilePanti from "./pages/DetailProfilePanti";
import DonasiKita from "./pages/DonasiKita";
import KelolaDataAnak from "./pages/KelolaDataAnak";
import KelolaDataPengurus from "./pages/KelolaDataPengurus";
import KelolaDataKeuangan from "./pages/KelolaDataKeuangan";
import KelolaDataDonasi from "./pages/KelolaDataDonasi";
import DataRelawan from "./pages/DataRelawan";

function App() {
	return (
      <>
         <Routes>
            <Route path={BERANDA} element={<Beranda />} />
            <Route path={HUBUNGI_KAMI} element={<HubungiKami />} />
            <Route path={PANTI_ASUHAN_KITA} element={<PantiAsuhanKita />} />
            <Route path={TENTANG_KAMI} element={<TentangKami />} />
            <Route path="/donasi-kita" element={<DonasiKita/>}/>
            <Route path="/detail-profile-panti/:string" element={<DetailProfilePanti/>}/>
            <Route path={DASHBOARD} element={<Dashboard />} />
            <Route path={KELOLA_PROFILE_DETAIL_PROFILE} element={<KelolaProfileDetailProfile />} />
            <Route path={KELOLA_PROFILE_DONASI} element={<KelolaProfileDonasi />} />
            <Route path={KELOLA_PROFILE_JADI_RELAWAN} element={<KelolaProfileJadiRelawan />} />
            <Route path={KELOLA_DATA_ANAK_ASUH} element={<KelolaDataAnak />} />
            <Route path={KELOLA_DATA_PENGURUS} element={<KelolaDataPengurus/>} />
            <Route path={KELOLA_DATA_KEUANGAN} element={<KelolaDataKeuangan/>} />
            <Route path={KELOLA_DATA_DONASI} element={<KelolaDataDonasi/>} />
            <Route path={DATA_RELAWAN} element={<DataRelawan/>} />
         </Routes>
      </>
	);
}

export default App;
