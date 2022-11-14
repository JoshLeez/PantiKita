import {useState} from 'react';
import { IconFileDescription,IconMapPin, IconFriends, IconPhone, IconMail
, IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok
, IconQuestionMark } from '@tabler/icons';
import "./Beranda.css";
import {Link} from 'react-router-dom';
import berandaasuh from '../images/beranda_asuh.png';
import berandabackground from '../images/beranda_background.png';
import rectangleword from '../images/rectangle_word.png';
import kampusmerdeka from '../images/Kampus_merdeka.png';
import msib from '../images/MSIB.png';
import infinitelearning from '../images/Infinite_Learning.png';
import macbookimg from '../images/macbook.png';
import fotoanakyatem from '../images/foto_anak_yatem.png';
import fotoanakyatemkedua from '../images/foto_anak_yatem_kedua.png';
import fotoanakyatemketiga from '../images/foto_anak_yatem_ketiga.png';
import tentangkami from '../images/tentang_kami_img.png';
import linetentangkami from '../images/line_tentang_kami_img.png';
import dottentangkami from '../images/dot_tentang_kami_img.png';

function Beranda() {
const [searchTerm, setSearchTerm] = useState('');

  const [data, setData]= useState([
    {
      nama_panti : "Panti Asuhan Yatim & Dhuafa Tanjung Barat",
      alamat : "Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12530.",
      image: fotoanakyatem,
      jumlah_anak : 20,
      pendiri : "Muhammad Sumbul",
      data : "Panti Asuhan Yatim & Dhuafa Tanjung Barat adalah lembaga kesejahteraan sosial yang bergerak dibidang pengasuhan anak yatim/yatim-piatu/dhuafa, didirikan sejak 2017 dengan 6 pengurus. Pada saat ini, Yayasan Panti Yatim & Dhuafa Tanjung Barat mengasuh total 25 anak yang terdiri dari berbagai tingkat pendidikan, mulai dari bayi hingga mahasiswa.",
      donasi : "570.000,00",
      orang_donasi : 10,
      relawan : 3,
      no_tlp : "0812-2343-7756"
    },
    {
      nama_panti : "Panti asuhan di Jurang Mangu, Tangerang Selatan (Asrama Yatim Piatu Putri)",
      alamat : "Raya Ceger No. 27, Jurang Mangu Timur-Tangerang Selatan.",
      image : fotoanakyatemkedua,
      jumlah_anak : 25,
      pendiri : "Zain",
      data : "Panti Asuhan Islam Media Kasih adalah lembaga kesejahteraan sosial yang bergerak dibidang pengasuhan anak yatim/yatim-piatu/dhuafa, didirikan sejak 2004 dengan 6 pengurus. Pada saat ini, Yayasan Panti Asuhan Islam Media Kasih mengasuh total 25 anak yang terdiri dari berbagai tingkat pendidikan, mulai dari bayi hingga mahasiswa.",
      donasi : "700.000,00",
      orang_donasi : 10,
      relawan : 7,
      no_tlp : "0857-1536-8904"
    },
    {
      nama_panti : "Panti asuhan di Pancoran Mas, Kota Depok, Jawa Barat. (Asrama Putri)",
      alamat : "Jl. Kartini, RT.3/RW.9, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431",
      image : fotoanakyatemketiga,
      jumlah_anak : 50,
      pendiri : "Moh. Saleh", 
      data : "Panti Asuhan Asrama Putri Yatim & Dhu’afa merupakan panti asuhan yang berlokasi di. Pancoran Mas, Kota Depok. Panti ini berdiri sejak tahun 2016 dan menampung 50 putri berkisar antara TK-SMP dan 4 pengurus. Keseharian anak-anak panti diisi dengan kegiatan belajar formal di pesantren pribadi dan sekolah umum, beribadah, mengaji Alquran...",
      donasi : "950.000,00",
      orang_donasi : 13,
      relawan : 5,
      no_tlp : "0812-2343-7478" 
    }
  ])

  const searchHandler = () =>{
    if(data.length === 0){
      return data
    }
    setData(data.filter((datas)=> datas.nama_panti.toLowerCase().includes(searchTerm.toLowerCase())))
  }

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
    <div className="layanan-tersedia">
      <h2>Layanan yang Kami Sediakan</h2>
      <div className="layanan-content-swiper">
        <div>swiper icon</div>
        <div className='layanan-content-list'>
          <img src={macbookimg} alt="mac-book-img"/>
          <div className="layanan-word">
                <h2>Pengelolaan Data Panti Asuhan</h2>
                <p>
                  Bertekad menjadi lembaga  pengelola dana yang berkhidmat menangani 
                  anak yatim piatu serta memberdayakannya.
                </p>
          </div>
        </div>
         <div>swiper icon</div>
      </div>
      <Link>Mulai Daftar</Link>
    </div>
    <div className="list-panti-asuhan-kita">
        <div className="list-panti-navbar">
          <h2>Panti Asuhan Kita</h2>
          <div className="list-panti-navbar-right">
            <input value ={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} placeholder="cari panti asuhan"/>
            <button onClick={searchHandler}>Cari</button>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        {data.map((datas, index)=>{
          return(
        <div className="container-data-panti-asuhan" key={index}>
            <div className="left-data-panti-asuhan">
              <div className="data-atas-panti">
                <img src={datas.image} alt="foto-anak-yatem" />
                <div className="nama-alamat-panti">
                      <h6>{datas.nama_panti}</h6>
                      <div className='alamat-panti'>
                            <IconMapPin size={48} color="#3AB7FE"/>
                          <p>{datas.alamat}</p>
                      </div>
                      <div className="jumlah-anak-asuh">
                        <IconFriends size={16} color="#3AB7FE"/>
                        <p>{datas.jumlah_anak} anak</p>
                      </div>
                      <p>Pendiri : {datas.pendiri}</p>
                </div>
              </div>
              <p>
              {datas.data}
              </p>
              <Link>Tentang Panti Asuhan</Link>
            </div>
            <div className="right-data-panti-asuhan">
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Dana Terkumpul Bulan ini</h5>
                    <h5>Donatur</h5>
                    <h5 className="data-angka-donasi-relawan">Rp. {datas.donasi}</h5>
                    <h5 className="data-angka-donasi-relawan">{datas.orang_donasi} Orang</h5>
                    </div>
                    <Link>Donasi</Link>
                </div>
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Relawan</h5>
                    <h5>Kontak</h5>
                    <h5 className="data-angka-donasi-relawan">{datas.relawan} Orang</h5>
                    <h5 className="data-angka-donasi-relawan">{datas.no_tlp}</h5>
                    </div>
                    <Link className="tombol-relawan">Menjadi Relawan</Link>
                </div>
            </div>      
        </div>
            )
        })}
        {/* <div className="container-data-panti-asuhan">
            <div className="left-data-panti-asuhan">
              <div className="data-atas-panti">
                <img src={fotoanakyatemkedua} alt="foto-anak-yatem" />
                <div className="nama-alamat-panti">
                      <h6>Panti asuhan di Jurang Mangu, Tangerang Selatan (Asrama Yatim Piatu Putri)</h6>
                      <div className='alamat-panti'>
                            <IconMapPin size={48} color="#3AB7FE"/>
                          <p>Raya Ceger No. 27, Jurang Mangu Timur-Tangerang Selatan.</p>
                      </div>
                      <div className="jumlah-anak-asuh">
                        <IconFriends size={16} color="#3AB7FE"/>
                        <p>25 anak</p>
                      </div>
                      <p>Pendiri : Zain</p>
                </div>
              </div>
              <p>
              Panti Asuhan Islam Media Kasih adalah lembaga
               kesejahteraan sosial yang bergerak dibidang pengasuhan 
               anak yatim/yatim-piatu/dhuafa, didirikan sejak 2004 dengan 6 pengurus. 
               Pada saat ini, Yayasan Panti Asuhan Islam Media Kasih mengasuh total 25 anak 
               yang terdiri dari berbagai tingkat pendidikan, mulai dari bayi hingga mahasiswa.
              </p>
              <Link>Tentang Panti Asuhan</Link>
            </div>
            <div className="right-data-panti-asuhan">
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Dana Terkumpul Bulan ini</h5>
                    <h5>Donatur</h5>
                    <h5 className="data-angka-donasi-relawan">Rp. 700.000,00</h5>
                    <h5 className="data-angka-donasi-relawan">10 Orang</h5>
                    </div>
                    <Link>Donasi</Link>
                </div>
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Relawan</h5>
                    <h5>Kontak</h5>
                    <h5 className="data-angka-donasi-relawan">7 Orang</h5>
                    <h5 className="data-angka-donasi-relawan">0857-1536-8904</h5>
                    </div>
                    <Link>Donasi</Link>
                </div>
            </div>      
        </div>
        <div className="container-data-panti-asuhan">
            <div className="left-data-panti-asuhan">
              <div className="data-atas-panti">
                <img src={fotoanakyatemketiga} alt="foto-anak-yatem" />
                <div className="nama-alamat-panti">
                      <h6>Panti asuhan di Pancoran Mas, Kota Depok, Jawa Barat. (Asrama Putri)</h6>
                      <div className='alamat-panti'>
                            <IconMapPin size={48} color="#3AB7FE"/>
                          <p>Jl. Kartini, RT.3/RW.9, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431</p>
                      </div>
                      <div className="jumlah-anak-asuh">
                        <IconFriends size={16} color="#3AB7FE"/>
                        <p>50 anak</p>
                      </div>
                      <p>Pendiri : Moh. Saleh</p>
                </div>
              </div>
              <p>
              Panti Asuhan Asrama Putri Yatim & Dhu’afa merupakan panti asuhan yang berlokasi 
              di. Pancoran Mas, Kota Depok. Panti ini berdiri sejak tahun 2016 dan menampung 
              50 putri berkisar antara TK-SMP dan 4 pengurus. Keseharian anak-anak panti diisi
               dengan kegiatan belajar formal di pesantren pribadi dan sekolah umum, beribadah, mengaji Alquran...
              </p>
              <Link>Tentang Panti Asuhan</Link>
            </div>
            <div className="right-data-panti-asuhan">
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Dana Terkumpul Bulan ini</h5>
                    <h5>Donatur</h5>
                    <h5 className="data-angka-donasi-relawan">Rp. 950.000,00</h5>
                    <h5 className="data-angka-donasi-relawan">13 Orang</h5>
                    </div>
                    <Link>Donasi</Link>
                </div>
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Relawan</h5>
                    <h5>Kontak</h5>
                    <h5 className="data-angka-donasi-relawan">5 Orang</h5>
                    <h5 className="data-angka-donasi-relawan">0812-2343-7478</h5>
                    </div>
                    <Link>Donasi</Link>
                </div>
            </div>      
        </div>
         */}
        <div className="page-number">
            <Link>1</Link>
            <Link>2</Link>
            <Link>3</Link>
            <Link>4</Link>
            <Link>5</Link>
            <Link>6</Link>
            <Link>7</Link>
            <Link>8</Link>
            <Link>9</Link>
            <Link>10</Link>
        </div>
    </div>
    <div className="tentang-kami-section">
        <div className="tentang-kami-left">
          <img src={linetentangkami} alt="line-tentang-kami" className="line-tentang-kami"/>
          <img src={tentangkami} alt="tentang-kami"/>
          <img src={dottentangkami} alt="dot-tentang-kami" className="dot-tentang-kami"/>
        </div>
        <div className="tentang-kami-right">
            <h2>Tentang Kami</h2>
            <p>
            Panti Kita  merupakan sebuah Website Online untuk panti asuhan dengan
             memberikan layanan untuk pengelolaan data-data yang ada di panti asuhan 
             dengan lebih cepat, efesien dan praktis serta pihak panti dapat membuat deskripsi tentang panti 
            asuhannya, membuka layanan donasi untuk umum dan juga relawan yang dapat membantu panti asuhan.
            </p>
        </div>
    </div>
    <div className="contact-form">
      <div className="contact-form-left">
        <div className='contact-form-left-title'>
        <h2>Hubungi kami</h2>
        <p>Jika anda membutuhkan bantuan, kami siap selalu membantu</p>
        </div>
        <div className="contact-form-kontak">
          <h6>Kontak</h6>
          <div className="form-kontak-icon">
          <IconMapPin  color="#3AB7FE"/>
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          </div>
          <div className="form-kontak-icon">
          <IconPhone  color="#3AB7FE"/>
          <p>(702) 555-0122</p>
          </div>
          <div className="form-kontak-icon">
          <IconMail  color="#3AB7FE" />
          <p>(702) 555-0122</p>
          </div>
          <div className="form-kontak-sosialmedia">
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
        <form className="contact-form-right">
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
          <button>Kirim</button>
        </form>
    </div>
  </div>
  )
}

export default Beranda