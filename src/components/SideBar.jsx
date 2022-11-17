import { LayoutDashboard, ClipboardText, Users, ReportMoney, Hearts, Logout } from "tabler-icons-react";
import LogoPantiKita from "../images/Logo-X-Dark-Panti-Kita.png";
import { NavLink } from "react-router-dom";
import "./styles/side_bar.css";

const SideBar = ()=> {
   return (
   <>
      <aside className="side-bar">
         <img className="logo" src={LogoPantiKita} alt="logo-panti-kita" />
         <img className="line" src="/assets/pattern-line.svg" alt="pattern-line" />
         <img className="square" src="/assets/pattern-square.svg" alt="pattern-square" />
         <nav className="nav-side-bar">
            <div className="nav-side">
               <LayoutDashboard className="icon-nav" />
               <NavLink to="" className="side-bar-link">Dashboard</NavLink>
            </div>
            <div className="nav-side">
               <ClipboardText className="icon-nav" />
               <NavLink to="" className="side-bar-link">Kelola Profile</NavLink>
            </div>
            <div className="nav-side-twoline">
               <Users className="icon-nav" />
               <NavLink to="" className="side-bar-link">Kelola Data Anak Asuh & Pengurus</NavLink>
            </div>
            <div className="nav-side">
               <ReportMoney className="icon-nav" />
               <NavLink to="" className="side-bar-link">Kelola Data Keuangan</NavLink>
            </div>
            <div className="nav-side">
               <Hearts className="icon-nav" />
               <NavLink to="" className="side-bar-link">Data Relawan</NavLink>
            </div>
         </nav>
         <div className="logout">
            <Logout className="icon-nav"/>
            <NavLink to="" className="side-bar-link">Keluar</NavLink>
         </div>
      </aside>
   </>
   )
}
export default SideBar;