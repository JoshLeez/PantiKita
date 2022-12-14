import {IconMapPin,IconPhone, IconMail
, IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok
, IconQuestionMark } from '@tabler/icons';
import './styles/hubungi_kami.css'
import HOC from '../components/HOC';
import Button from '../components/Button';
import Footer from '../components/Footer';
import {Navbars} from '../components/Navbar'

function HubungiKami() {

  return (
    <HOC title="Hubungi Kami - Panti Kita">
      <Navbars/>
    <div className='hoc-container'>
      <section className="contact-form-page">
        <div className="contact-form-left">
          <div className='contact-form-left-title-page'>
          <h2>Hubungi kami</h2>
          <p>Jika anda membutuhkan bantuan, kami siap selalu membantu</p>
          </div>
          <div className="contact-form-kontak-page">
            <h6>Kontak</h6>
            <div className="form-kontak-icon-page">
            <IconMapPin  color="#3AB7FE"/>
            <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div className="form-kontak-icon-page">
            <IconPhone  color="#3AB7FE"/>
            <p>(702) 555-0122</p>
            </div>
            <div className="form-kontak-icon-page">
            <IconMail  color="#3AB7FE" />
            <p>(702) 555-0122</p>
            </div>
            <div className="form-kontak-sosialmedia-page">
              <h5>Sosial Media</h5>
              <div className='contact-icon-img'>
                  <IconBrandTwitter size={24} color="#3AB7FE" />
                  <IconBrandFacebook size={24} color="#3AB7FE"/>
                  <IconBrandInstagram size={24} color="#3AB7FE"/>
                  <IconBrandTiktok size={24} color="#3AB7FE"/>
              </div>
            </div>
          </div>
        </div>
          <form className="contact-form-right-page">
            <h3>Ada Pertanyaan?</h3>
            <div className='contact-form-right-container'>
            <div className="input-pertanyaan">
            <IconMail  color="#3AB7FE" />
              <input placeholder='masukan email anda'/>
            </div>
            <div className="input-pertanyaan">
            <IconQuestionMark  color="#3AB7FE" />
              <input placeholder='ada pertanyaan?'/>
            </div>
            </div>
            <Button type="PRIMARY">
              Kirim
            </Button>
          </form>
      </section>
      </div>
      <Footer/>
    </HOC>
  )
}

export default HubungiKami