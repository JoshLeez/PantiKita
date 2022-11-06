import React from 'react';
import { IconFileDescription } from '@tabler/icons';
import "./Beranda.css"
import {Link} from 'react-router-dom'
import berandaasuh from '../images/beranda_asuh.png'
import berandabackground from '../images/beranda_background.png'
import rectangleword from '../images/rectangle_word.png';
import kampusmerdeka from '../images/Kampus_merdeka.png';
import msib from '../images/MSIB.png'
import infinitelearning from '../images/Infinite_Learning.png';


function Beranda() {
  return (
    <div>
      <img className="beranda-background" src={berandabackground} alt="background-beranda"/>
      <div className="beranda-parent">
      <section className='cari-panti-section'>
        <h1>Cari Panti Asuhan</h1>
        <p>Selamat datang di halaman beranda Panti KIta. Disini anda dapat menemukan berbagai informasi dari Yayasan  Panti Asuhan seluruh Indonesia. Semoga dengan kehadiran website ini kami dapat membantu masyarakat dalam memperoleh informasi tentang panti asuhan yang ada di Indonesia.</p>
        <Link>Cari Panti</Link>
        </section>
    <img src={berandaasuh} alt="berandaasuh" className="right-side-section"/>
    <div className="rectangle-word-left"> 
      <img src={rectangleword} alt="rectangle-word-left"/>
      <h4>Relawan</h4>
      <h5>200+</h5>
    </div>
    <div className="rectangle-word-right">
      <img src={rectangleword} alt="rectangle-word-right"/>
      <h4>Donatur</h4>
      <h5>1.000+</h5>
    </div>
    <div className="rectangle-word-bottom">
    <h3>Salurkan</h3>
    <h3>Jariyahmu</h3>
    </div>
    </div>
      <div className="tiga-logo">
        <img src={kampusmerdeka} alt="kampus_merdeka"/>
        <img src={msib} alt="MSIB"/>
        <img src={infinitelearning} alt="Infinite_Learning"/>
      </div>
    <div className="opsi-beranda">
          <h3>Peduli Panti Asuhan Kita</h3>
          <div className='hasil-opsi'>
          <div className="the-option">
                <div className='option-icon'>
                 <IconFileDescription/>
                </div>
                 <div className="option-word">
                    <h5>Memberikan Donasi</h5>
                    <p>Ayo salurkan dana mu sekarang untuk membantu 
                      meningkatkan kualitas panti asuhan</p>
                 </div>
              </div>    
              <div className="the-option">
                <div className='option-icon'>
                 <IconFileDescription/>
                </div>
                 <div className="option-word">
                    <h5>Memberikan Donasi</h5>
                    <p>Ayo salurkan dana mu sekarang untuk membantu 
                      meningkatkan kualitas panti asuhan</p>
                 </div>
              </div>        
              <div className="the-option">
                <div className='option-icon'>
                 <IconFileDescription/>
                </div>
                 <div className="option-word">
                    <h5>Memberikan Donasi</h5>
                    <p>Ayo salurkan dana mu sekarang untuk membantu 
                      meningkatkan kualitas panti asuhan</p>
                 </div>
              </div>                 
          </div>
    </div>
  </div>
  )
}

export default Beranda