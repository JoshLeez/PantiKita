import SideBar from "../components/SideBar";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, Plus, FileDownload, Edit, Trash, File } from "tabler-icons-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { KELOLA_DATA_PENGURUS, KELOLA_DATA_ANAK_ASUH } from "./Router";
import "./styles/kelola_data_anak_dan_pengurus.css";

const KelolaDataPengurus = () => {
   return (
      <>
         <HOC title="Kelola Data - Pengurus">
            <div className="container">
               <SideBar activeSideManagePopulation="active-side-color" activeBgManagePopulation="active-side-two-line"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Data Anak Asuh & Pengasuh" />
                  <div className="wrapper-header-table-data">
                     <div className="wrapper-select-data">
                        <Link to={KELOLA_DATA_ANAK_ASUH}><button>Anak Asuh</button></Link>
                        <Link to={KELOLA_DATA_PENGURUS}><button className="active-select-data">Pengurus</button></Link>
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
                  <div className="bg-table-data-caretaker">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Button type="SM_CREATE"><Plus />Tambah</Button>
                           <Button type="SM_CREATE"><FileDownload />Cetak Data</Button>
                        </div>
                        <p className="table-explanation">Total Pengurus : 5 orang</p>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-caretaker">
                           <tr className="table-title table-title-data-caretaker">
                              <th>No</th>
                              <th>Nama</th>
                              <th>Gender</th>
                              <th>Tgl Lahir</th>
                              <th>Asal</th>
                              <th>Tgl Jadi Pengurus</th>
                              <th>Aksi</th>
                           </tr>
                           <tr className="row row-1">
                              <td>1</td>
                              <td>Anomimus</td>
                              <td>laki-laki</td>
                              <td>12-8-1999</td>
                              <td>Jakarta</td>
                              <td>22-7-2018</td>
                              <td>
                                 <div className="table-action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </td>
                           </tr>
                        </table>
                        <div className="footer-table">
                           <span className="show-data-caretaker">Menampilkan tabel 1 dari 1 tabel 10 entri</span>
                           <div className="wrapper-next-and-previous-table">
                              <button className="previous-table-caretaker">sebelumnya</button>
                              <span className="value-table-caretaker">1</span>
                              <button className="next-table-caretaker">Selanjutnya</button>
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

export default KelolaDataPengurus;