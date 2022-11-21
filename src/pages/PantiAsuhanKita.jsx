import "./styles/panti_asuhan_kita.css";
import HOC from "../components/HOC";
import {Navbars} from "../components/Navbar";
import Footer from "../components/Footer";
import  {CariPantiAsuhan}  from "../components/CariPantiAsuhan";
import Filter from "../components/Filter";
import ListPantiAsuhan from "../components/ListPantiAsuhan";


function PantiAsuhanKita() {
	return (
		<HOC title="Panti Asuhan Kita - Panti Kita">
		<Navbars/>
		<div className="hoc-container">
			<section className="panti-asuhan-kita-search-filter">
				<CariPantiAsuhan/>
				<Filter/>
			</section>
			<ListPantiAsuhan/>
		</div>
		<Footer/>
		</HOC>
	);
}

export default PantiAsuhanKita;
