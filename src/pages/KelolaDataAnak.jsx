import SideBar from "../components/SideBar";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, Plus, FileDownload, Edit, Trash, File } from "tabler-icons-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { KELOLA_DATA_PENGURUS, KELOLA_DATA_ANAK_ASUH } from "./Router";
import "./styles/kelola_data_anak_dan_pengurus.css";

const KelolaDataAnak = () => {
   return (
      <>
         <HOC title="Kelola Data - Anak Asuh">
            <div className="container">
               <SideBar activeSideManagePopulation="active-side-color" activeBgManagePopulation="active-side-two-line"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Data Anak Asuh & Pengasuh" />
                  <div className="wrapper-header-table-data">
                     <div className="wrapper-select-data">
                        <Link to={KELOLA_DATA_ANAK_ASUH}><button className="active-select-data">Anak Asuh</button></Link>
                        <Link to={KELOLA_DATA_PENGURUS}><button>Pengurus</button></Link>
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
                  <div className="bg-table-data-children">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Button type="SM_CREATE"><Plus />Tambah</Button>
                           <Button type="SM_CREATE"><FileDownload />Cetak Data</Button>
                        </div>
                        <p className="table-explanation">Total Anak Asuh : 20 anak</p>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-children">
                           <tr className="table-title table-title-data-children">
                              <th>No</th>
                              <th>Nama</th>
                              <th>Gender</th>
                              <th>Tgl Lahir</th>
                              <th>Asal</th>
                              <th>Tgl Masuk</th>
                              <th>Foto Ktp Ortu/Wali</th>
                              <th>Aksi</th>
                           </tr>
                           <tr className="row row-1">
                              <td>1</td>
                              <td>Anomimus</td>
                              <td>laki-laki</td>
                              <td>12-8-2007</td>
                              <td>Surabaya</td>
                              <td>22-7-2021</td>
                              <td>
                                 <div className="table-file-content">
                                    <File />
                                    <span>Foto_ktp.jpg</span>
                                 </div>
                              </td>
                              <td>
                                 <div className="table-action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </td>
                           </tr>
                        </table>
                        <div className="footer-table">
                           <span className="show-data-children">Menampilkan tabel 1 dari 2 tabel 10 entri</span>
                           <div className="wrapper-next-and-previous-table">
                              <button className="previous-table-children">sebelumnya</button>
                              <span className="value-table-children">1</span>
                              <button className="next-table-children">Selanjutnya</button>
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

export default KelolaDataAnak;