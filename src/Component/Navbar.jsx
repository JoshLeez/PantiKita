import {useState} from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'
import logo_panti_kita from '../images/logo_panti_kita.png'

function Navbar() {
  const [fix, setFix] = useState(false)

  const Fixedhanlder = () =>{
    if (window.scrollY >= 72){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }

  window.addEventListener("scroll", Fixedhanlder)
  
  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <div className="left-navbar">
      <img src={logo_panti_kita} alt="logo-panti-kita"/>
      </div> 
      <div className="mid-navbar">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/pantiasuhankita">Panti Asuhan Kita</NavLink>
        <NavLink to="/status">Tentang Kami</NavLink>
        <NavLink to="/hubungikami">Hubungan Kami</NavLink>
      </div>
      <div className="right-navbar">
          <Link>Masuk</Link>
          <Link className="tombol-daftar">Daftar</Link>
      </div>
    </nav>
  )
}

export default Navbar