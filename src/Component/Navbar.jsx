import React from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'
import logo_panti_kita from '../images/logo_panti_kita.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="left-navbar">
      <img src={logo_panti_kita} alt="logo-panti-kita"/>
      </div> 
      <div className="mid-navbar">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/about">Panti Asuhan Kita</NavLink>
        <NavLink to="/status">Tentang Kami</NavLink>
        <NavLink to="/status">Hubungan Kami</NavLink>
      </div>
      <div className="right-navbar">
          <Link>Masuk</Link>
          <Link className="tombol-daftar">Daftar</Link>
      </div>
    </nav>
  )
}

export default Navbar