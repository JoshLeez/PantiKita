import { LayoutDashboard, ClipboardText, Users, ReportMoney, Hearts, Logout } from "tabler-icons-react";
import LogoPantiKita from "../images/Logo-X-Dark-Panti-Kita.png";
import { NavLink } from "react-router-dom";
import "./styles/side_bar.css";

const SideBar = (props)=> {
   return (
   <>
      <aside className="side-bar">
         <img className="logo" src={LogoPantiKita} alt="logo-panti-kita" />
         <img className="line" src="/assets/pattern-line.svg" alt="pattern-line" />
         <img className="square" src="/assets/pattern-square.svg" alt="pattern-square" />
         <nav className="nav-side-bar">
            <div className={"nav-side " + props.activeSideDashboard + " " + props.activeBgDashboard}>
               <LayoutDashboard className="icon-nav" />
               <NavLink to="/dashboard" className={"side-bar-link " + props.activeSideDashboard}>Dashboard</NavLink>
            </div>
            <div className={"nav-side " + props.activeSideManageProfile + " " + props.activeBgManageProfile }>
               <ClipboardText className="icon-nav" />
               <NavLink to="/kelola-profile" className={"side-bar-link " + props.activeSideManageProfile}>Kelola Profile</NavLink>
            </div>
            <div className={"nav-side-twoline " + props.activeSideManagePopulation + " " + props.activeBgManagePopulation}>
               <Users className="icon-nav" />
               <NavLink to="/kelola-data-anak-asuh-dan-pengurus" className={"side-bar-link " + props.activeSideManagePopulation}>Kelola Data Anak Asuh & Pengurus</NavLink>
            </div>
            <div className={"nav-side " + props.activeSideManageFinancial + " " + props.activeBgManageFinancial}>
               <ReportMoney className="icon-nav" />
               <NavLink to="/kelola-data-keuangan" className={"side-bar-link " + props.activeSideManageFinancial}>Kelola Data Keuangan</NavLink>
            </div>
            <div className={"nav-side " + props.activeSideVolunteer + " " + props.activeBgVolunteer}>
               <Hearts className="icon-nav" />
               <NavLink to="/data-relawan" className={"side-bar-link " + props.activeSideVolunteer}>Data Relawan</NavLink>
            </div>
         </nav>
         <div className={"logout " + props.activeSideLogout + " " + props.activeBgLogout}>
            <Logout className="icon-nav"/>
            <NavLink to="" className={"side-bar-link " + props.activeSideLogout}>Keluar</NavLink>
         </div>
      </aside>
   </>
   )
}
export default SideBar;