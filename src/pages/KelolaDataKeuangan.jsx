import SideBar from "../components/SideBar";
import { HeaderDashboard } from "../components/Navbar";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, Plus, FileDownload, Edit, Trash, ChevronUp } from "tabler-icons-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { KELOLA_DATA_KEUANGAN, KELOLA_DATA_DONASI } from "./Router";
import "./styles/kelola_data_keuangan_dan_relawan.css";

const KelolaDataKeuangan = () => {
   return (
      <>
         <HOC title="Kelola Data - Keuangan">
            <div className="container">
               <SideBar activeSideManageFinancial="active-side-color" activeBgManageFinancial="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Data Keuangan" />
                  <div className="wrapper-header-table-data">
                     <div className="wrapper-select-data">
                        <Link to={KELOLA_DATA_KEUANGAN}><button className="active-select-data">Keuangan</button></Link>
                        <Link to={KELOLA_DATA_DONASI}><button>Dana Donasi</button></Link>
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
                  <div className="bg-table-data-financial">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Button type="SM_CREATE"><Plus />Tambah</Button>
                           <Button type="SM_CREATE"><FileDownload />Cetak Data</Button>
                           <div className="dropdown-option">
                              <div className="option-select">
                                 <span>Semua</span>
                                 <ChevronUp size={16} color="#3AB7FE" />
                              </div>
                              <ul className="menu">
                                 <li>November, 2022</li>
                                 <li>Oktober, 2022</li>
                              </ul>
                           </div>
                        </div>
                        <div className="wrapper-table-explanation">
                           <p className="table-explanation-income">Total Pemasukan: Rp. 12.500.000</p>
                           <p className="table-explanation-outcome">Total Pengeluaran: Rp. 10.820.000</p>
                        </div>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-financial">
                           <tr className="table-title table-title-data-financial">
                              <th>No</th>
                              <th>Tanggal</th>
                              <th>Keterangan</th>
                              <th>Pemasukan</th>
                              <th>Pengeluaran</th>
                              <th>Aksi</th>
                           </tr>
                           <tr className="row row-1">
                              <td>1</td>
                              <td>7-11-2022</td>
                              <td>Donasi Bulan Oktober</td>
                              <td>Rp. 600.000,-</td>
                              <td>-</td>
                              <td>
                                 <div className="table-action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </td>
                           </tr>
                        </table>
                        <div className="footer-table">
                           <span className="show-data-financial">Menampilkan tabel 1 dari 5 tabel 10 entri</span>
                           <div className="wrapper-footer-table-right">
                              <p className="table-explanation-kas">Kas Panti: Rp. 1.780.000</p>
                              <div className="wrapper-next-and-previous-table">
                                 <button className="previous-table-financial">sebelumnya</button>
                                 <span className="value-table-financial">1</span>
                                 <button className="next-table-financial">Selanjutnya</button>
                              </div>
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

export default KelolaDataKeuangan;