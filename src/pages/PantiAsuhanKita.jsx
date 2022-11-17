import "./styles/panti_asuhan_kita.css";
import HOC from "../components/HOC";
import { IconAdjustmentsHorizontal, IconKey, IconCoin, IconBuildingSkyscraper, IconBuildingCommunity  } from '@tabler/icons';

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
										<h6>Donatur yang Terdaftar</h6>
										<h5><span>1.080 </span> Donatur</h5>
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
						<h5>Filter</h5>
					</div>
					<div className="right-panti-asuhan-filter-input">
							<div className="input-filter-panti">
								<h6>Kata Kunci</h6>
								<div className="input-layout-filter">
									<IconKey color="#3AB7FE"/>
									<input placeholder="kata kunci"/>
								</div>		
							</div>
							<div className="input-filter-panti">
								<h6>Range Donasi Terkumpul</h6>
								<div className="input-layout-filter">
									<IconCoin  color="#3AB7FE"/>
									<input/>
								</div>		
							</div>
							<div className="input-filter-panti">
								<h6>Provinsi</h6>
								<div className="input-layout-filter">
									<IconBuildingSkyscraper  color="#3AB7FE"/>
									<input/>
								</div>		
							</div>
							<div className="input-filter-panti">
								<h6>Kabupaten/Kota</h6>
								<div className="input-layout-filter">
									<IconBuildingCommunity color="#3AB7FE"/>
									<input/>
								</div>		
							</div>
					</div>
				</div>
			</section>
		</HOC>
	);
}

export default PantiAsuhanKita;
