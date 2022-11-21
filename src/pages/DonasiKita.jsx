import HOC from '../components/HOC'
import './styles/donasi_panti_asuhan.css'
import { NavbarDetailProfilePanti } from '../components/Navbar'
import { IconMapPin, IconFriends, IconPhone, IconChevronUp  } from '@tabler/icons';
import Button from '../components/Button';

const DonasiKita = () => {
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
          <Button type="DONASI">Donasi</Button>
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
                  </div>
                  <div className='garis-progress-donasi'>
                  </div>
                  <div className="bola-progress-donasi">
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
     </div>
    </HOC>
 
  )
}

export default DonasiKita