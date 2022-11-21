import HOC from "../components/HOC"
import SideBar from "../components/SideBar";
import { HeaderDashboard, HeaderNavbarKelolaProfile } from "../components/Navbar";
import { InputPhoto, InputMedium ,InputMediumNonLabel, InputDescription } from "../components/InputForm";
import Button from "../components/Button";
import { Edit, Trash } from "tabler-icons-react";
import "./styles/kelola_profile_jadi_relawan.css";

const KelolaProfileJadiRelawan = () => {
   return (
      <>
        <HOC title="Kelola Profile - Jadi Relawan">
            <div className="container">
               <SideBar activeSideManageProfile="active-side-color" activeBgManageProfile="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Profile" />
                  <HeaderNavbarKelolaProfile activeVolunteer="active-link-nav-manage-profiles"/>
                  <div className="content-manage-profile-volunteer">
                     <section className="open-volunteer">
                        <h2>Buka Relawan</h2>
                        <div className="content-open-volunteer">
                           <p>Relawan Telah Dibuka</p>
                           <form className="form-volunteer-opened">
                              <InputPhoto />
                              <div className="wrapper wrapper-form-contact">
                                 <InputMedium  text="Kontak" type="text" placeholder="nomor telepon" name="contact">
                                    <InputMediumNonLabel type="email" placeholder="email panti asuhan" name="contact" />
                                 </InputMedium>
                                 <div className="action-content">
                                    <Button type="EDIT"><Edit /></Button>
                                    <Button type="DELETE"><Trash /></Button>
                                 </div>
                              </div>
                           </form>
                           <div className="wrapper-button-open-or-closed">
                              <Button type="MD_TUTUP">Tutup Relawan</Button>
                              <p>*setelah menutup layanan relawan, layanan akan dibuka kembali dalam waktu 24 jam </p>
                           </div>
                        </div>
                     </section>
                     <section className="volunteer-requirements">
                        <h2>Persyaratan Relawan <span>(Opsional)</span></h2>
                        <form className="form-volunteer-requirements">
                           <div className="wrapper wrapper-volunteer-requirements">
                              <label htmlFor="">Yang Kami Butuhkan</label>
                              <div className="action-content">
                                 <Button type="EDIT"><Edit /></Button>
                                 <Button type="DELETE"><Trash /></Button>
                              </div>
                              <InputDescription placeholder="tulis persyaratan menjadi relawan disini"/>
                           </div>
                        </form>
                     </section>
                  </div>
               </div>
            </div>
         </HOC>
      </>
   )
}

export default KelolaProfileJadiRelawan;