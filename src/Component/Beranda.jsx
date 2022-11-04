import React from 'react';
import { MoodKid } from 'tabler-icons-react';
import "./Beranda.css"
import {Link} from 'react-router-dom'
import berandaasuh from '../images/beranda_asuh.png'
import berandabackground from '../images/beranda_background.png'

function Beranda() {
  return (
    <div>
      <img className="beranda-background" src={berandabackground} alt="background-beranda"/>
      <section className='cari-panti-section'>
        <h1>Cari Panti Asuhan</h1>
        <p>Selamat datang di halaman beranda Panti KIta. Disini anda dapat menemukan berbagai informasi dari Yayasan  Panti Asuhan seluruh Indonesia. Semoga dengan kehadiran website ini kami dapat membantu masyarakat dalam memperoleh informasi tentang panti asuhan yang ada di Indonesia.</p>
        <Link>Cari Panti</Link>
        </section>
      <MoodKid
    size={48}
    strokeWidth={2}
    color={'#004BAE'}
  />
  <div className="right-side-section">
    <img src={berandaasuh} alt="berandaasuh"/>
  </div>
      </div>
  )
}

export default Beranda