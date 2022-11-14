import './styles/footer.css';
import logodarklight from '../images/Logo-X-Dark-Panti-Kita.png';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer>
          <div className='footer-top'>
          <img src={logodarklight} alt="logo"/>
          <div className='footer-right-container'>
            <div className='footer-right-top'>
              <Link to="/">Beranda</Link>
              <Link>Panti Asuhan Kita</Link>
              <Link>Tentang Kami</Link>
              <Link to="/hubungi-kami">Hubungi Kami</Link>
            </div>
            <div className='footer-right-bottom'>
              <Link>Laporan</Link>
              <Link>Persyaratan</Link>
              <Link>Kebijakan Privasi</Link>
            </div>
          </div>
          </div>
          <p>Copyright © 2022 PANTIKITA. All rights reserved.</p>
        </footer>
    </>
  )     
}

export default Footer