import {useState} from 'react'
import './styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'
import logo_panti_kita from '../images/logo_panti_kita.png'

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
    <nav className={fix ? "navbar" :  fixed ? "navbar fixed" : "navbar fixed bottom"}>
      <div className="left-navbar">
      <img src={logo_panti_kita} alt="logo-panti-kita"/>
      </div> 
      <div className="mid-navbar">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/panti-asuhan-kita">Panti Asuhan Kita</NavLink>
        <NavLink to="/status">Tentang Kami</NavLink>
        <NavLink to="/hubungi-kami">Hubungan Kami</NavLink>
      </div>
      <div className="right-navbar">
          <Link>Masuk</Link>
          <Link className="tombol-daftar">Daftar</Link>
      </div>
    </nav>
  )
}

export default Navbar
