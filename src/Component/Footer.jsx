<<<<<<< HEAD
import './Footer.css';
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
              <Link to="/hubungikami">Hubungi Kami</Link>
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

=======
import './Footer.css';
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
              <Link to="/hubungikami">Hubungi Kami</Link>
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

>>>>>>> 30530e35d63e49ddcad3b4c111bf63a1bffe379c
export default Footer