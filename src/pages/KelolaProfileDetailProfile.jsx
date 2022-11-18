import "./styles/kelola_profile_detail_profile.css"
import SideBar from "../components/SideBar";
import { HeaderDashboard, HeaderNavbarKelolaProfile } from "../components/Navbar";
import {InputMedium, InputPhoto, InputDescription} from "../components/InputForm";
import Button from "../components/Button";
import { Edit, Trash } from "tabler-icons-react";
import HOC from "../components/HOC";

const KelolaProfileDetailProfile = () => {
   return (
      <HOC title="Kelola Profile - Detail Profile">
         <div className="container">
            <SideBar />
            <div className="container-left">
               <HeaderDashboard title="Kelola Profile" />
               <HeaderNavbarKelolaProfile activeDetail="active-link-nav-manage-profiles"/>
               <div className="content-detail-profile">
                  <section className="brief-profile-orphanage">
                     <h2>Profile Singkat Panti Asuhan</h2>
                     <form className="form-brief-profile">
                        <InputMedium  text="Nama Panti Asuhan" placeholder="nama panti asuhan" name="name"></InputMedium>
                        <InputMedium  text="Pendiri Panti Asuhan" placeholder="pendiri panti asuhan" name="founder"></InputMedium>
                        <InputMedium  text="Alamat Panti Asuhan" placeholder="alamat panti asuhan" name="addres"></InputMedium>
                        <InputMedium  text="Jumlah Anak Asuh" placeholder="jumlah anak asuh" name="sum-child"></InputMedium>
                        <InputMedium  text="Nomor Telepon Panti Asuhan" placeholder="nomor telepon panti asuhan" name="no-hp"></InputMedium>
                        <div className="wrapper-input-poto">
                           <label>Foto Panti Asuhan</label>
                           <InputPhoto />
                        </div>
                     </form>
                     <div className="action-button-brief-profile">
                        <Button type="SM_EDIT">
                           <Edit />
                           Edit
                        </Button>
                        <Button type="SM_DELETE">
                           <Trash />
                           Hapus
                        </Button>
                     </div>
                  </section>
                  <section className="about-orphanage">
                     <h2>Tentang Panti Asuhan</h2>
                     <form className="form-about-orphanage">
                        <div className="desctiption-orphanage">
                           <label htmlFor="">Deskripsi Panti Asuhan</label>
                           <div className="action-content">
                              <Button type="EDIT"><Edit /></Button>
                              <Button type="DELETE"><Trash /></Button>
                           </div>
                           <InputDescription />
                        </div>
                        <div className="program-orphanage">
                           <label htmlFor="">Program Panti Asuhan</label>
                           <div className="action-content">
                              <Button type="EDIT"><Edit /></Button>
                              <Button type="DELETE"><Trash /></Button>
                           </div>
                           <div className="input-content-program">
                              <InputPhoto />
                              <InputDescription />
                           </div>
                        </div>
                        <div className="documentation-orphanage">
                           <label htmlFor="">Dokumentasi Panti Asuhan</label>
                           <div className="input-content-documentation">
                              <InputPhoto />
                              <InputDescription />
                              <div className="action-per-content">
                                 <Button type="EDIT"><Edit /></Button>
                                 <Button type="DELETE"><Trash /></Button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </section>
               </div>
               <div className="display-null"></div>
            </div>
         </div>
      </HOC>
   )
}

export default KelolaProfileDetailProfile;