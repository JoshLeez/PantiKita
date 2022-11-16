import "./styles/panti_asuhan_kita.css";
import HOC from "../components/HOC";

function PantiAsuhanKita() {
	return (
		<HOC title="Panti Asuhan Kita - Panti Kita">
			<section className="panti-asuhan-kita-search-filter">
				<div className="left-panti-asuhan-kita-search-filter">
					<h2>Panti Asuhan Kita</h2>
					<p>
					Memaksimalkan layanan panti asuhan yang sudah terdaftar  yang  bekerjasama 
					dengan panti kita untuk meningkatkan para donatur dan relawan. Di mana website 
					ini berfungsi sebagai perantara dengan panti-panti asuhan lainnya dan sangat 
					bermanfaat untuk anak-anak yatim piatu atau dhuafa.		
					</p>
					<div className="left-panti-asuhan-kita-search-button">
						<input placeholder="cari panti asuhan"/>
						<button>Cari</button>	
					</div>
					<div className="container-animation-data-panti">
						<div id="animation-data-panti">
							<div className="container-data-panti">
								<h6>Panti Asuhan Yang Terdaftar</h6>
								<p>107 Panti Asuhan</p>
							</div>
							<div className="container-data-panti">Test</div>
							<div className="container-data-panti">Test</div>
						</div>
					</div>
					</div>
				<div className="right-panti-asuhan-kita-search-filter">
					<h2>Panti Asuhan Kita</h2>
					<p>
					Memaksimalkan layanan panti asuhan yang sudah terdaftar  yang  bekerjasama 
					dengan panti kita untuk meningkatkan para donatur dan relawan. Di mana website 
					ini berfungsi sebagai perantara dengan panti-panti asuhan lainnya dan sangat 
					bermanfaat untuk anak-anak yatim piatu atau dhuafa.		
					</p>
				</div>
			</section>
		</HOC>
	);
}

export default PantiAsuhanKita;
