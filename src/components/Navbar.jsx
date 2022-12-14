import {useState} from 'react'
import './styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'
import logo_panti_kita_dark from '../images/Logo-X-Dark-Panti-Kita.png'
import logo_panti_kita_light from '../images/Logo-X-Light-Panti-Kita.png'
import { IconArrowLeft, IconHomeDollar, IconHeartHandshake } from '@tabler/icons';
import { Bell,ChevronUp, FileDescription, HomeDollar, HeartHandshake, DeviceFloppy } from "tabler-icons-react";
import Button from "./Button";
import { BERANDA, DONASI_KITA, JADI_RELAWAN } from '../pages/Router'

function Navbar() {
  const [fix, setFix] = useState(true)
  const [fixed, setFixed] = useState(true)

  const fixedHanlder = () =>{
    if (window.scrollY >= 72){
      setFix(false)
    }
    else{
      setFix(true)
    }
  }

  const fixedHanlders = () =>{
    if (window.scrollY >=500){
    setFixed(false)
    }
    else{
   setFixed(true)
    }
  }

  window.addEventListener("scroll", fixedHanlder)
  
  window.addEventListener("scroll", fixedHanlders)
  
  return (  
    <header className={fix ? "navbar-container" : fixed ? "navbar-container fixed" : "navbar-container fixed bottom"}>
      <nav className="navbar">
        <div className="left-navbar">
        <Link to="/">
        <img src={fixed ? logo_panti_kita_dark : logo_panti_kita_light } className={fixed ? "" : "logo-kecil"} alt="logo-panti-kita"/>
        </Link>
        </div> 
        <div className={fixed ? "mid-navbar" : "mid-navbar fixed"}>
            <NavLink to="/" end>Beranda</NavLink>
            <NavLink to="/panti-asuhan-kita">Panti Asuhan Kita</NavLink>
            <NavLink to="/tentang-kami">Tentang Kami</NavLink>
            <NavLink to="/hubungi-kami">Hubungan Kami</NavLink>
        </div>
        <div className="right-navbar">
            <Link to="/masuk" className={fixed ? "" : "fixed-color"}>Masuk</Link>
            <Link className="tombol-daftar"><Button type="SECONDARY">Daftar</Button></Link>
        </div>
      </nav>
    </header>
  )
}


export const Navbars = () => {
  return (
    <header className="navbars-container">
    <nav className="navbars">
      <div className="left-navbar">
      <Link to="/">
      <img src={logo_panti_kita_light}  className="logo-kecil" alt="logo-panti-kita"/>
      </Link>
      </div> 
      <div className="mid-navbar fixed">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/panti-asuhan-kita">Panti Asuhan Kita</NavLink>
        <NavLink to="/tentang-kami">Tentang Kami</NavLink>
        <NavLink to="/hubungi-kami">Hubungan Kami</NavLink>
      </div>
      <div className="right-navbar">
          <Link className={"fixed-color"} to="/masuk" >Masuk</Link>
          <Link className="tombol-daftar"><Button type="SECONDARY">Daftar</Button></Link>
      </div>
    </nav>
  </header>
  )
}

export const HeaderDashboard = (props) => {
	return (
		<>
			<header className="header-dashboard">
				<h1>{props.title}</h1>
				<div className="status">
					<div className="notification">
						<Bell color="#3AB7FE" />
						<span>2</span>
					</div>
					<div className="welcome">
						<p>
							selamat datang, <strong>AgusSalim01</strong>
						</p>
						<ChevronUp color="#3AB7FE" />
					</div>
				</div>
			</header>
		</>
	);
};

export const HeaderNavbarKelolaProfile = (props) => {
   return (
      <>
         <header className="wrapper-header-manage-profiles">
            <nav className="header-nav-manage-profiles">
               <div className="content-nav-manage-profiles">
                  <div className={"detail-nav nav-manage-profiles " + props.activeDetail}>
                     <FileDescription />
                     <NavLink to="/kelola-profile" className={"detail-link " + props.activeDetail}>Detail Panti Asuhan</NavLink>
                     {props.activeDetail && <div className="line-active"></div> }
                  </div>
                  <div className={"donate-nav nav-manage-profiles " + props.activeDonate}>
                     <HomeDollar />
                     <NavLink to="/kelola-profile/donasi" className={"donate-link " + props.activeDonate}>Donasi Kita</NavLink>
                     {props.activeDonate && <div className="line-active"></div> }
                  </div>
                  <div className={"volunteer-nav nav-manage-profiles " + props.activeVolunteer}>
                     <HeartHandshake />
                     <NavLink to="/kelola-profile/jadi-relawan" className={"volunteer-link " + props.activeVolunteer} >Jadi Relawan</NavLink>
                     {props.activeVolunteer && <div className="line-active"></div> }
                  </div>
               </div>
            </nav>
            <Button type="MD_SIMPAN"> 
               <DeviceFloppy />
               Simpan
            </Button>
         </header>
      </>
   )
}


export const NavbarDetailProfilePanti = ({state}) => {

  return (
    <header className='wrapper-navbar-detail-profile-panti'>
      <nav className='navbar-detail-profile-panti-container'>
        <Link to={BERANDA}>
          <IconArrowLeft className="hover-for-navbar-detail-profile"/>   
        </Link>
        <NavLink to={`/detail-profile-panti`} className='detail-profile-panti-link'>
          <FileDescription/>
          <p>Detail Profile Panti Asuhan</p>
        </NavLink>
        <NavLink to={DONASI_KITA} className='detail-profile-panti-link'>
          <IconHomeDollar/>
          <p>Donasi Kita</p>
        </NavLink>
        <NavLink to={JADI_RELAWAN} className='detail-profile-panti-link'>
          <IconHeartHandshake />
          <p>Jadi Relawan</p>
        </NavLink>
      </nav>
    </header>
  )
}



export default Navbar;