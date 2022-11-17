import {useState} from 'react'
import './styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'
import logo_panti_kita_dark from '../images/Logo-X-Dark-Panti-Kita.png'
import logo_panti_kita_light from '../images/Logo-X-Light-Panti-Kita.png'

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
        <img src={fixed ? logo_panti_kita_dark : logo_panti_kita_light } alt="logo-panti-kita"/>
        </div> 
        <div className={fixed ? "mid-navbar" : "mid-navbar fixed"}>
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/panti-asuhan-kita">Panti Asuhan Kita</NavLink>
          <NavLink to="/tentang-kami">Tentang Kami</NavLink>
          <NavLink to="/hubungi-kami">Hubungan Kami</NavLink>
        </div>
        <div className="right-navbar">
            <Link className={fixed ? "" : "fixed-color"}>Masuk</Link>
            <Link className="tombol-daftar">Daftar</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
