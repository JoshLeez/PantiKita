import SideBar from "../components/SideBar";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, FileDownload, ChevronUp, File } from "tabler-icons-react";
import Button from "../components/Button";
import "./styles/kelola_data_keuangan_dan_relawan.css";

const DataRelawan = () => {
   return (
      <>
         <HOC title="Data - Relawan">
            <div className="container">
               <SideBar activeSideVolunteer="active-side-color" activeBgVolunteer="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Data Relawan" />
                  <div className="wrapper-header-table-data" id="wrapper-header-table-data-volunteer">
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
                  <div className="bg-table-data-volunteer">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Button type="SM_CREATE"><FileDownload />Cetak Data</Button>
                        </div>
                        <p className="table-explanation">Total Relawan : 3 Orang</p>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-volunteer">
                           <tr className="table-title table-title-data-volunteer">
                              <th>No</th>
                              <th>Nama</th>
                              <th>Email</th>
                              <th>No. Hp</th>
                              <th>Gender</th>
                              <th>Umur</th>
                              <th>Pekerjaan</th>
                              <th>Tgl Daftar</th>
                              <th>Jenis Relawan</th>
                              <th>Foto</th>
                           </tr>
                           <tr className="row row-1">
                              <td>1</td>
                              <td>
                                 <div className="wrapper-table-name">
                                    <span>Sulaiman</span>
                                    <span>(Tampilkan)</span>
                                 </div>
                              </td>
                              <td>sulaiman@gmail.com</td>
                              <td>0896567675</td>
                              <td>Laki-laki</td>
                              <td>30</td>
                              <td>Guru Sma</td>
                              <td>22-7-2022</td>
                              <td>Tenaga Pendidikan</td>
                              <td>
                                 <div className="table-file-content">
                                    <File />
                                    <span>Foto.jpg</span>
                                 </div>
                              </td>
                           </tr>
                        </table>
                        <div className="footer-table">
                           <span className="show-data-volunteer">Menampilkan tabel 1 dari 1 tabel 10 entri</span>
                           <div className="wrapper-next-and-previous-table">
                              <button className="previous-table-volunteer">sebelumnya</button>
                              <span className="value-table-volunteer">1</span>
                              <button className="next-table-volunteer">Selanjutnya</button>
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

export default DataRelawan;