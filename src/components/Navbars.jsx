import {Link, NavLink} from 'react-router-dom';
import logo_panti_kita_light from '../images/Logo-X-Light-Panti-Kita.png'
import './styles/navbars.css'
function Navbars() {
  return (
    <header className="navbars-container">
    <nav className="navbars">
      <div className="left-navbar">
      <img src={logo_panti_kita_light} alt="logo-panti-kita"/>
      </div> 
      <div className="mid-navbar fixed">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/panti-asuhan-kita">Panti Asuhan Kita</NavLink>
        <NavLink to="/tentang-kami">Tentang Kami</NavLink>
        <NavLink to="/hubungi-kami">Hubungan Kami</NavLink>
      </div>
      <div className="right-navbar">
          <Link className={"fixed-color"}>Masuk</Link>
          <Link className="tombol-daftar">Daftar</Link>
      </div>
    </nav>
  </header>
  )
}

export default Navbars