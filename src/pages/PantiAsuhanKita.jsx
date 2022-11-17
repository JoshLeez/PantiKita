import "./styles/panti_asuhan_kita.css";
import HOC from "../components/HOC";
import { IconAdjustmentsHorizontal } from '@tabler/icons';

function PantiAsuhanKita() {
	return (
		<HOC title="Panti Asuhan Kita - Panti Kita" status>
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
							<marquee direction="left" id="animation-container-data-panti" >
								<div className="triple-container-animation">
									<div>
										<h6>Panti Asuhan Yang Terdaftar</h6>
										<h5><span>107</span> Panti Asuhan</h5>
									</div>
									<div>
										<h6>Relawan yang Terdaftar</h6>
										<h5><span>214</span> Relawan</h5>
									</div>
								</div>
							</marquee>
						</div>
					</div>
				<div className="right-panti-asuhan-kita-search-filter">
					<div className="right-panti-asuhan-filter-judul">
						<IconAdjustmentsHorizontal/>
						<h2>Filter</h2>
					</div>
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
