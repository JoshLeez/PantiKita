import HOC from "../components/HOC";
import { NavbarDetailProfilePanti } from "../components/Navbar";
import "./styles/detail_profile_panti.css";
import { IconMapPin, IconFriends, IconPhone } from "@tabler/icons";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const DetailProfilePanti = () => {
  const { state } = useLocation();

  return (
    <HOC title={`Panti Kita = ${state.data.nama_panti}`}>
      <NavbarDetailProfilePanti state={ state } />
      <div className="hoc-container">
        <article className="profile-detail-panti">
          <div className="data-awal-panti">
            <h3>{state.data.nama_panti}</h3>
            <div className="data-lokasi-panti">
              <div className="alamat-profile-panti">
                <div className="word-alamat-panti">
                  <IconMapPin/>
                  <p>{state.data.alamat}</p>
                </div>
                <div className="word-alamat-panti">
                  <IconFriends />
                  <p>{state.data.jumlah_anak} anak</p>
                </div>
                <div className="word-alamat-panti">
                  <IconPhone />
                  <p>{state.data.no_tlp}</p>
                </div>
                <p>Pendiri : Muhammad Sumbul</p>
              </div>
              <div className="data-gambar-panti">
                <h3>Swiper</h3>
                <img src={state.data.image} alt={state.data.nama_panti} />
                <h3>Swiper</h3>
              </div>
            </div>
            <p>
              {state.data.nama_panti} hadir sebagai bentuk pengabdian dari kami
              kepada masyarakat sekitar yang khususnya di daerah Jakarta Selatan
              yang dalam hal dapat membantu serta memudahkan mayarakat dalam
              berdonasi dan menjadi relawan serta membangun potensi yang lebih
              baik lagi untuk anak-anak yang berlatar belakang kurang sempurna
              atau kurang mampu dari segi finensial maupun dapat memberikan
              berbagai kegiatan penunjang kebutuhan sehari-hari.
            </p>
          </div>
          <div className="program-kami">
            <h3>Program Kami</h3>
            <div className="program-kami-swiper">
              <h3>Swiper</h3>
              <img src="./assets/program_kami.svg" alt="Program-Panti-Asuhan" />
              <h3>Swiper</h3>
            </div>
            <div className="program-kami-artikel">
              <h6>Pengembangan Potensi Anak</h6>
              <p>
                Adalah program menemukan potensi diri atau bakat anak – anak
                yatim dhuafa berdasarkan bakat dan minat yang dikembangkan
                melalui edukasi dan pelatihan secara progresif sesuai dengan
                tingkat kedewasaan anak. Program ini bertujuan untuk membekali
                anak bukan saja dari sisi akademis melainkan juga dari sisi
                pengembangan skill/keahlian dan potensi diri yang dimiliki anak
                sehingga ditargetkan mereka bisa menjadi pribadi yang Taqwa,
                Cerdas dan Mandiri.
              </p>
              <p>
                Program ini meliputi kegiatan diantaranya : Tahfidz Qur’an,
                Kursus Keahlian IT/design, dan yang lainnya.
              </p>
              <h6>Kebutuhan Pangan</h6>
              <p>
                Program pemenuhan kebutuhan pangan anak yaitu berupa pemberian
                asupan makanan yang memiliki kesesuaian dengan usia tumbuh
                kembang anak dan standar Angka Kecukupan Gizi (AKG).
              </p>
              <p>
                Kurangnya Gizi dan kasih sayang merupakan salah satu faktor
                utama yang menghambat pengembangan diri anak-anak yatim dhuafa,
                memenuhi 2 faktor tersebut menjadi hal yang penting untuk
                membantu mencerahkan masa depan mereka.
              </p>
              <h6>Kesehatan Yatim & Dhuafa</h6>
              <p>
                Kesehatan merupakan aset yang sangat berharga dalam hidup.
                Pemberian pelayanan kesehatan untuk anak – anak yatim & dhaufa
                baik yang bersifat konsumtif maupun prepentif, program ini
                meliputi : medical check up, pemenuhan suplemen dan vitamin
                serta penanganan secara tuntas terhadap penyakit yang diderita
                anak di asrama (tempat mereka tinggal).
              </p>
              <p>
                Hal ini dilakukan secara secara continue dan progresif agar
                anak-anak bisa tetap tumbuh sehat menyongsong masa depan,
                begitupun para pengasuh anak-anak, agar mereka bisa bisa
                mengetahui kendalan kesehatanan anak-anak asuh nya juga tetap
                terjaga kesehatannya.
              </p>
            </div>
          </div>
          <section className="section-dokumentasi">
            <h3>Dokumentasi</h3>
            <div className="artikel-dokumentasi">
              <img src="./assets/dokumentasi_1.svg" alt="foto-dokumentasi" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                delectus, cupiditate, nemo iusto autem nam, incidunt
                consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet
                consectetur adipisicing elit. Commodi delectus, cupiditate, nemo
                iusto autem nam, incidunt consequuntur odio ipsam
                dignissimosLorem ipsum dolor sit amet c.
              </p>
            </div>
            <div className="artikel-dokumentasi">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                delectus, cupiditate, nemo iusto autem nam, incidunt
                consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet
                consectetur adipisicing elit. Commodi
              </p>
              <img src="./assets/dokumentasi_2.svg" alt="foto-dokumentasi" />
            </div>
            <div className="artikel-dokumentasi">
              <img src="./assets/dokumentasi_3.svg" alt="foto-dokumentasi" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                delectus, cupiditate, nemo iusto autem nam, incidunt
                consequuntur odio ipsam dignissimosLorem ipsum dolor sit amet
                consectetur adipisicing elit. Commodi
              </p>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </HOC>
  );
};

export default DetailProfilePanti;
