import SideBar from "../components/SideBar";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, FileDownload, ChevronUp, File } from "tabler-icons-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { KELOLA_DATA_KEUANGAN, KELOLA_DATA_DONASI } from "./Router";
import "./styles/kelola_data_keuangan_dan_relawan.css";

const KelolaDataDonasi = () => {
   return (
      <>
         <HOC title="Kelola Data - Dana Donasi">
            <div className="container">
               <SideBar activeSideManageFinancial="active-side-color" activeBgManageFinancial="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Data Keuangan" />
                  <div className="wrapper-header-table-data">
                     <div className="wrapper-select-data">
                        <Link to={KELOLA_DATA_KEUANGAN}><button >Keuangan</button></Link>
                        <Link to={KELOLA_DATA_DONASI}><button className="active-select-data">Dana Donasi</button></Link>
                     </div>
                     <div className="wrapper-data-search">
                        <div className="search-data">
                           <Search color="#3AB7FE"/>
                           <input type="search" placeholder="cari data.." />
                        </div>
                        <div className="filter-data">
                           <div className="title-menu-filter-data">
                              <AdjustmentsHorizontal color="#3AB7FE"/>
                              <span>Urutkan Data</span>
                           </div>
                           <ul className="menu-filter-data">
                              <li>halo</li>
                           </ul>           
                        </div>
                     </div>
                  </div>
                  <div className="bg-table-data-donate">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Button type="SM_CREATE"><FileDownload />Cetak Data</Button>
                           <div className="dropdown-option">
                              <div className="option-select">
                                 <span>November, 2022</span>
                                 <ChevronUp size={16} color="#3AB7FE" />
                              </div>
                              <ul className="menu">
                                 <li>November, 2022</li>
                                 <li>Oktober, 2022</li>
                              </ul>
                           </div>
                        </div>
                        <p className="table-explanation">Total Donasi Terkumpul: Rp. 570.000,-</p>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-donate">
                           <tr className="table-title table-title-data-donate">
                              <th>No</th>
                              <th>Donatur</th>
                              <th>Nama Donatur</th>
                              <th>Email</th>
                              <th>Foto</th>
                              <th>Tgl Donasi</th>
                              <th>Jumlah Donasi</th>
                           </tr>
                           <tr className="row row-1">
                              <td>1</td>
                              <td>Perorangan</td>
                              <td>
                                 <div className="wrapper-table-name">
                                    <span>levi</span>
                                    <span>(Sembunyikan)</span>
                                 </div>
                              </td>
                              <td>levi@gmail.com</td>
                              <td>
                                 <div className="table-file-content">
                                    <File />
                                    <span>Foto.jpg</span>
                                 </div>
                              </td>
                              <td>7-11-2022</td>
                              <td>Rp. 50.000,-</td>
                           </tr>
                        </table>
                        <div className="footer-table">
                           <span className="show-data-donate">Menampilkan tabel 1 dari 1 tabel 10 entri</span>
                           <div className="wrapper-next-and-previous-table">
                              <button className="previous-table-donate">sebelumnya</button>
                              <span className="value-table-donate">1</span>
                              <button className="next-table-donate">Selanjutnya</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="display-null"></div>
               </div>
            </div>
         </HOC>
      </>
   )
}

export default KelolaDataDonasi;