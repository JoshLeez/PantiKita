import HOC from "../components/HOC"
import SideBar from "../components/SideBar";
import { HeaderDashboard, HeaderNavbarKelolaProfile } from "../components/Navbar";
import {InputMedium, InputMediumNonLabel, InputPhoto, InputDescription } from "../components/InputForm";
import Button from "../components/Button";
import { Edit, Trash, Plus, ChevronUp } from "tabler-icons-react";
import "./styles/kelola_profile_donasi.css"

const KelolaProfileDonasi = () => {
   return (
      <>
        <HOC title="Kelola Profile - Donasi">
            <div className="container">
               <SideBar activeSideManageProfile="active-side-color" activeBgManageProfile="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Profile" />
                  <HeaderNavbarKelolaProfile activeDonate="active-link-nav-manage-profiles"/>
                  <div className="content-manage-profile-donate">
                     <section className="open-donate">
                        <h2>Buka Donasi</h2>
                        <div className="content-open-donate">
                           <p>Donasi Telah Dibuka</p>
                           <form className="form-donate-opened">
                              <div className="wrapper wrapper-form-contact">
                                 <InputMedium  text="Kontak" type="text" placeholder="nomor telepon" name="contact">
                                    <InputMediumNonLabel type="email" placeholder="email panti asuhan" name="contact" />
                                 </InputMedium>
                                 <div className="action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </div>
                              <div className="wrapper  wrapper-no-rekening">
                                 <InputMedium text="Nomor Rekening" type="number" placeholder="nomor rekening" name="no-account"></InputMedium>
                                 <div className="action-content">
                                    <Button type="CREATE"><Plus /></Button>
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </div>
                              <div className="wrapper wrapper-target-donate">
                                 <InputMedium text="Targer Donasi Per Bulan" type="number"  placeholder="Rp. 0,-"  pattern="Rp. + [0-9]{10000000} + ,-" name="target"></InputMedium>
                                 <div className="action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </div>
                              <div className="wrapper wrapper-terms-donate-goods">
                                 <InputMedium text="Ketentuan Donasi Barang" placeholder="tulis ketentuan" name="terms" ></InputMedium>
                                 <div className="action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </div>
                           </form>
                           <div className="wrapper-button-open-or-closed">
                              <Button type="MD_TUTUP">Tutup Donasi</Button>
                              <p>*setelah menutup donasi, layanan donasi akan dibuka kembali dalam waktu 24 jam </p>
                           </div>
                        </div>
                     </section>
                     <section className="report-donate-orphanage">
                        <h2>Laporan Dana Donasi Panti Asuhan</h2>
                        <div className="dropdown-date-report-donate">
                           <div className="dropdown-option-year">
                              <span>November, 2022</span>
                              <ChevronUp size={16} color="#3AB7FE" />
                           </div>
                           <ul className="menu-year">
                              <li>November, 2022</li>
                              <li>Oktober, 2021</li>
                           </ul>
                        </div>
                        <div className="content-report-donate-orphanage">
                           <div className="wrapper wrapper-create-report">
                              <label>Tambah laporan</label>
                              <div className="action-content">
                                 <Button type="SM_CREATE"><Plus />Tambah</Button>
                              </div>
                              <table className="table-report-donate">
                                 <tr className="table-title-report-donate">
                                    <th>Tanggal</th>
                                    <th>Keterangan</th>
                                    <th>Pengeluaran</th>
                                    <th>Aksi</th>
                                 </tr>
                                 <tr className="row row-1">
                                    <td>7-11-2022</td>
                                    <td>Uang Transpot</td>
                                    <td>Rp. 20.000,-</td>
                                    <td>
                                       <div className="table-action-content">
                                          <Button type="EDIT"><Edit /></Button>
                                          <Button type="DELETE"><Trash /></Button>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr className="row row-2">
                                    <td>7-11-2022</td>
                                    <td>SPP</td>
                                    <td>Rp. 180.000,-</td>
                                    <td>
                                       <div className="table-action-content">
                                          <Button type="EDIT"><Edit /></Button>
                                          <Button type="DELETE"><Trash /></Button>
                                       </div>
                                    </td>
                                 </tr>
                              </table>
                           </div>
                           <div className="wrapper wrapper-description-report">
                              <label htmlFor="">Deskripsi Laporan</label>
                              <div className="input-content-description-report">
                                 <InputPhoto />
                                 <div className="wrapper-caption">
                                    <InputDescription placeholder="tulis deskripsi disini"/> 
                                 </div>
                                 <div className="action-per-content">
                                    <Button type="EDIT"><Edit /></Button>
                                 </div>
                              </div>
                              <div className="input-content-description-report">
                                 <InputPhoto />
                                 <div className="wrapper-caption">
                                    <InputDescription placeholder="tulis deskripsi disini"/> 
                                 </div>
                                 <div className="action-per-content">
                                    <Button type="EDIT"><Edit /></Button>
                                 </div>
                              </div>
                           </div>
                           <small>*laporan waijb diisi setiap sebulan sekali, jika anda belum mengisi laporan dana donasi perbulan nya, maka akses untuk layanan donasi nya akan kami tutup sementara sampai anda membuat laporan donasi dibulan sebelumnya.</small>
                        </div>
                     </section>
                  </div>
                  <div className="display-null"></div>
               </div>
            </div>
         </HOC>
      </>
   )
}

export default KelolaProfileDonasi;