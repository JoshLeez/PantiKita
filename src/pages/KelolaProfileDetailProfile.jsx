import "./styles/kelola_profile_detail_profile.css"
import SideBar from "../components/SideBar";
import HeaderDashboard from "../components/HeaderDashboard";

const KelolaProfileDetailProfile = () => {
   return (
      <>
         <div className="container">
            <SideBar />
            <div className="container-left">
               <HeaderDashboard title="Kelola Profile" />
               
            </div>
         </div>
      </>
   )
}

export default KelolaProfileDetailProfile;