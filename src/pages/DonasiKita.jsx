import HOC from '../components/HOC'
import {useState} from 'react'
import FormDonasi,  { FormDonasi2, FormDonasi3 } from '../components/FormDonasi'
import './styles/donasi_panti_asuhan.css'
import { NavbarDetailProfilePanti } from '../components/Navbar'
import { IconMapPin, IconFriends, IconPhone,IconAdjustmentsHorizontal ,IconChevronUp  } from '@tabler/icons';
import Button from '../components/Button';
import Perorangan from '../components/Perorangan'
import Organisasi from '../components/Organisasi'
import Instansi from '../components/Instansi'
import BagiamanKamuBisaMembantu from '../components/BagiamanKamuBisaMembantu'
import Footer from '../components/Footer';

const DonasiKita = () => {
  const [donateToggle, setDonateToggle] = useState(false) 
  const [formDonasi2, setFormDonasi2] = useState(false)
  const [formDonasi3, setFormDonasi3] = useState(false)

  return (
    <HOC title='Panti Kita - Donasi'>
      <NavbarDetailProfilePanti/>
     <div className='hoc-container'>
      <div className='container-donasi-panti'>
        <div className='profile-pantiku'>
          <div className='gambar-dan-data-panti'>
              <img src="./assets/foto_yayasan_panti_asuhan.svg" alt='foto-panti-asuhan'/>
              <div className='lokasi-panti-asuhan'>
                <h6>Panti Asuhan Yatim & Dhuafa Tanjung Barat</h6>
                <div className='inside-lokasi-panti'>
                  <IconMapPin/> 
                  <p>
                    Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec. 
                    Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12530.
                  </p>
                </div>
                <div className='inside-lokasi-panti'>
                  <IconFriends /> 
                  <p>20 anak</p>
                </div>
                <div className='inside-lokasi-panti'>
                  <IconPhone/> 
                  <p>0857-1536-8904</p>
                </div>
                <p>Pendiri : Muhammad Sumbul</p>
              </div>
          </div>
        </div>
        <div className='donasi-terkumpul'>
          <div className='dana-terkumpul-bulan-ini'>
            <h5>Dana Terkumpul Bulan Ini</h5>
            <h3>Rp. 570.000,00</h3>
            <p>terkumpul dari Rp. 1.000.000,-</p>
          </div>
          <div className='target-progressbar'>
              <div className='target-nilai'>
                <p>target</p>
                <p>Rp. 600.000,-</p>
              </div>
              <div className='the-progressbar'>
                <div>
                </div>
              </div>
          </div>
          <Button  onClick={()=>setDonateToggle(!donateToggle)} type="DONASI">Donasi</Button>
        </div>
      </div>
      <section className='laporan-terbaru-donasi'>
        <h3>Laporan Terbaru Dana Donasi</h3>
        <div className='artikel-pendidikan-anak-asuh'>
            <aside className='left-side-pendidikan-anak-asuh'>
              <div className='pendidikan-anak-asuh-dropdown'>
                  <p>November, 2022</p>
                  <IconChevronUp />
              </div>
              <h6>Pengeluaran Bulan Ini</h6>
              <div className='left-side-progress-donasi'>
                <div className='progress-bola-garis'>
                  <div className="bola-progress-donasi">
                  </div>
                  <div className='garis-progress-donasi'>
                  </div>
                  <div className="bola-progress-donasi">
                  </div>
                  <div className='garis-progress-donasi'>
                  </div>
                  <div className="bola-progress-donasi">
                  <div className="bola-progress-donasi">
                    <div className="bola-capaian-progress"></div>
                  </div>
                  </div>
                  <div className='garis-progress-donasi'>
                  </div>
                  <div className="bola-progress-donasi">
                  </div>
                </div>
                  <div className='progressbar-right-side'>
                    <div className='inside-progressbar-right'>
                      <p>7-11-2022</p>
                      <h6>Rp. 20.000,-</h6>
                      <p className='progress-word'>Uang Transpot</p>
                    </div>
                    <div className='inside-progressbar-right'>
                      <p>7-11-2022</p>
                      <h6>Rp. 180.000,-</h6>
                      <p className='progress-word'>SPP</p>
                    </div>
                    <div className='inside-progressbar-right'>
                      <p>7-11-2022</p>
                      <h6>Rp. 300.000,-</h6>
                      <p className='progress-word'>Pendidikan Anak Asuh</p>
                    </div>
                    <div className='inside-progressbar-right'>
                      <p>7-11-2022</p>
                      <h6>Rp. 500.000,-</h6>
                      <p className='progress-word'>Biaya Makan</p>
                    </div>
                  </div>
              </div>
            </aside>
            <div className='right-side-pendidikan-anak-asuh'>
                <h3>Pendidikan Anak Asuh</h3>
                <img src="./assets/program_kami.svg" alt='program-kami'/>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi delectus, cupiditate, nemo iusto autem nam, incidunt 
                consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet 
                consectetur adipisicing elit. Commodi delectus, cupiditate, nemo 
                iusto autem nam, incidunt consequuntur odio ipsam dignissimosLorem 
                ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus, 
                cupiditate, nemo iusto autem namdignissimosLorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus, cupiditate, nemo iusto autem nam, incidunt consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus, cupiditate, nemo iusto autem nam, incidunt consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus, cupiditate, nemo iusto autem namdignissimosLorem ipsum dolor sit.
                </p>
            </div>
        </div>
      </section>
      <section className='riwayat-donatur-panti-kita'>
        <h3>Riwayat Donatur Panti Kita</h3>
        <div className='section-data-donatur'>
            <nav>
              <h3>Donatur</h3>
              <div className='filter-data-donatur'>
                <IconAdjustmentsHorizontal />
                <h5>Filter</h5>
              </div>
            </nav>
            <div className='tiga-donatur'>
              <Perorangan/>
              <Organisasi/>
              <Instansi/>
            </div>
        </div>
      </section>
        <BagiamanKamuBisaMembantu/>
        {donateToggle && <FormDonasi setDonateToggle={setDonateToggle} donateToggle={donateToggle}  formDonasi2={formDonasi2} setFormDonasi2={setFormDonasi2}/>}
        {formDonasi2 && <FormDonasi2 setDonateToggle={setDonateToggle} donateToggle={donateToggle}  formDonasi2={formDonasi2} setFormDonasi2={setFormDonasi2} setFormDonasi3={setFormDonasi3} formDonasi3={formDonasi3}/>}
        {formDonasi3 && <FormDonasi3 formDonasi2={formDonasi2} setFormDonasi2={setFormDonasi2} setFormDonasi3={setFormDonasi3} formDonasi3={formDonasi3}/>}
     </div>
     <Footer/>
    </HOC>
 
  )
}

export default DonasiKita