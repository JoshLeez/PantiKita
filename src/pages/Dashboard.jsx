import SideBar from "../components/SideBar";
import {ChevronUp,ZoomMoney,User,Hearts,Users,Man,Woman,MapPin,Phone,Friends,Edit} from "tabler-icons-react";
import { Button } from "../components/Button";
import "./styles/dashboard.css";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";

const Dashboard = () => {
	return (
      <HOC title="Dashboard">
         <div className="container">
            <SideBar />
            <div className="container-left">
               <HeaderDashboard title="Dashboard"/>
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
                     <div className="content-volunteer">
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
                                 <div className="option-select">
                                    <span>Gender</span>
                                    <ChevronUp size={16} color="#3AB7FE" />
                                 </div>
                                 <ul className="menu">
                                    <li>Gender</li>
                                    <li>Jenis Relawan</li>
                                 </ul>
                              </div>
                              <div className="description-option">
                                 <div className="man">Laki-laki</div>
                                 <div className="woman">Perempuan</div>
                              </div>
                           </div>
                           <div className="pie-chart">
                              <img src="./assets/pie-chart.svg" alt="pie chart" />
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
               <div className="population-financial-profile">
                  <div className="wrapper-population-financial">
                     <section className="population">
                        <h2>Kelola Data Anak Asuh & Pengurus</h2>
                        <div className="content-population">
                           <div className="all-population">
                              <div className="title title-all-population">
                                 <Users color="#3AB7FE" />
                                 <h3>Semua</h3>
                              </div>
                              <p>25 Orang</p>
                           </div>
                           <div className="foster-child">
                              <h3 className="title">Anak Asuh</h3>
                              <div className="gender gender-foster-child">
                                 <div className="male-gender">
                                    <Man color="#3AB7FE" />
                                    <p>8 Laki-laki</p>
                                 </div>
                                 <div className="female-gender">
                                    <Woman color="#3AB7FE" />
                                    <p>12 Perempuan</p>
                                 </div>
                              </div>
                           </div>
                           <div className="orphanage-caretaker">
                              <h3 className="title">Pengurus</h3>
                              <div className="gender gender-orphanage-caretaker">
                                 <div className="male-gender">
                                    <Man color="#3AB7FE" />
                                    <p>3 Laki-laki</p>
                                 </div>
                                 <div className="female-gender">
                                    <Woman color="#3AB7FE" />
                                    <p>2 Perempuan</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section className="financial">
                        <div className="header-financial">
                           <h2>Data Keuangan</h2>
                           <div className="guide-bar-chart">
                              <div className="income">
                                 <span></span>
                                 <small>pemasukan</small>
                              </div>
                              <div className="outcome">
                                 <span></span>
                                 <small>pengeluaran</small>
                              </div>
                           </div>
                           <div className="dropdown-date-financial">
                              <div className="dropdown-option-year">
                                 <span>2022</span>
                                 <ChevronUp size={16} color="#3AB7FE" />
                              </div>
                              <ul className="menu-year">
                                 <li>2022</li>
                                 <li>2021</li>
                              </ul>
                           </div>
                        </div>
                        <img src="./assets/bar-chart-financial.svg"alt="bar-chart"/>
                     </section>
                  </div>
                  <section className="profile">
                     <h2>Profile Pantiku</h2>
                     <div className="content-profile">
                        <img src="/assets/foto-panti.png" alt="foto-profile-panti"/>
                        <h3>Panti Asuhan Yatim & Dhuafa Tanjung Barat</h3>
                        <div className="address-orphanage">
                           <MapPin color="#3AB7FE" />
                           <small>
                              Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung
                              Barat, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah
                              Khusus Ibukota Jakarta 12530.
                           </small>
                        </div>
                        <div className="population-child-orphanage">
                           <Friends color="#3AB7FE" />
                           <small>20 anak</small>
                        </div>
                        <div className="phone-orphanage">
                           <Phone color="#3AB7FE" />
                           <small>0857-1536-8904</small>
                        </div>
                        <p>Pendiri : Muhammad Sumbul</p>
                     </div>
                     <div className="wrapper-button-small-edit">
                        <Button type="SM_EDIT" >
                           <Edit color="#FAFAFA" />
                           <p>Edit</p>
                        </Button>
                     </div>
                  </section>
               </div>
               <div className="display-null"></div>
            </div>
         </div>
      </HOC>
	);
};

export default Dashboard;
