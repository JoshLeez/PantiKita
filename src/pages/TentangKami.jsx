import HOC from '../components/HOC'
import './styles/tentang_kami.css'
import berandabackground from '../images/beranda_background.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TentangKami() {
  return (
    <HOC  title="Panti Kita - Tentang Kami">
      <Navbar/>
    <div className='hoc-container'>
      <img className="beranda-background" src={berandabackground} alt="tentang-kami-background"/>
      <section className="page-tentang-kami-section">
        <div className="tentang-kami-left">
          <img src="./assets/tentang_kami_img.svg" alt="tentang-kami"/>
        </div>
        <div className="page-tentang-kami-right">
            <h2>Tentang Kami</h2>
            <p>
            Panti Kita  merupakan sebuah Website Online untuk panti asuhan dengan
             memberikan layanan untuk pengelolaan data-data yang ada di panti asuhan 
             dengan lebih cepat, efesien dan praktis serta pihak panti dapat membuat deskripsi tentang panti 
            asuhannya, membuka layanan donasi untuk umum dan juga relawan yang dapat membantu panti asuhan.
            </p>
        </div>
    </section>
      <section className='tentang-kami-section-layanan-kami'>
        <h2>Layanan yang Kami Sediakan</h2>
      </section>
      </div>
      <Footer/>
    </HOC>
  )
}

export default TentangKami