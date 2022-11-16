import SideBar from "../components/SideBar";
import { Bell, ChevronUp, ZoomMoney, User, Hearts } from "tabler-icons-react";
import "./styles/dashboard.css";

const Dashboard = () => {
	return (
		<div className="overflow-hidden">
			<div className="row">
				<div className="col-3">
					<SideBar />
				</div>
				<div className="col-9">
					<header className="header-dashboard">
						<h1>Dashboard</h1>
						<div className="status">
							<div className="notification">
								<Bell color="#3AB7FE" />
								<span>2</span>
							</div>
							<div className="welcome">
								<p>
									selamat datang, <strong>AgusSalim01</strong>
								</p>
								<ChevronUp color="#3AB7FE" />
							</div>
						</div>
					</header>
					<div className="donate-volunteer">
						<section className="donate">
							<h2>Donasi</h2>
							<div className="content-donate">
								<div className="funds-raised">
									<div className="title title-funds-raised">
										<ZoomMoney color="#3AB7FE" />
										<h3>Dana Terkumpul</h3>
									</div>
									<p>Rp. 1.000.000,-</p>
									<div className="target">
										<span>target bulan ini</span>
										<div className="target-parameter">
											<p>Rp. 570.000,-/Rp. 600.000,-</p>
											<div className="parameter"></div>
										</div>
									</div>
								</div>
								<div className="donator">
									<div className="title title-donator">
										<User color="#3AB7FE" />
										<h3>Donatur</h3>
									</div>
									<p>10 Orang</p>
								</div>
							</div>
						</section>
						<section className="volunteer">
							<h2>Relawan</h2>
							<div className="all-volunteer">
								<div className="title title-all-volunter">
									<Hearts color="#3AB7FE" />
									<h3>Semua Relawan</h3>
								</div>
								<p>3 Orang</p>
							</div>
							<div className="statistic-volunteer">
								<div className="option-statistic">
									<div className="dropdown-option">
										<span>Gender</span>
                              <ChevronUp size={16} color="#3AB7FE" />
									</div>
									<ul>
										<li>Gender</li>
										<li>Jenis Relawan</li>
									</ul>
									<div className="description-option">
										<span>Laki-laki</span>
										<span>Perempuan</span>
									</div>
								</div>
								<div className="pie-chart"></div>
							</div>
						</section>
					</div>
               <div className="population-financial-profile">

               </div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
