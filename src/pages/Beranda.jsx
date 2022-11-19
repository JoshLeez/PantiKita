import {useState} from 'react'
import HOC from "../components/HOC";
import {
  IconFileDescription,
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconQuestionMark,
  IconChevronLeft,
  IconChevronRight,
  IconHomeDollar,
} from "@tabler/icons";
import "./styles/beranda.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import berandaasuh from "../images/beranda_asuh.png";
import berandabackground from "../images/beranda_background.png";
import rectangleword from "../images/rectangle_word.png";
import tentangkami from "../images/tentang_kami_img.png";
import linetentangkami from "../images/line_tentang_kami_img.png";
import dottentangkami from "../images/dot_tentang_kami_img.svg";
import ListPantiAsuhan from "../components/ListPantiAsuhan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FormDonasi from "../components/FormDonasi";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import {PANTI_ASUHAN_KITA} from './Router'

function Beranda() {


  return (
    <HOC title="Panti Kita">
      <Navbar/>
      <div className="hoc-container">
        <img
          className="beranda-background"
          src={berandabackground}
          alt="background-beranda"
        />
      <div className="beranda-parent">
        <section className="cari-panti-section">
          <h1>Cari Panti Asuhan</h1>
          <p>
            Selamat datang di halaman beranda Panti KIta. Disini anda dapat
            menemukan berbagai informasi dari Yayasan Panti Asuhan seluruh
            Indonesia. Semoga dengan kehadiran website ini kami dapat membantu
            masyarakat dalam memperoleh informasi tentang panti asuhan yang ada
            di Indonesia.
          </p>
          <Link to={PANTI_ASUHAN_KITA} >
          <Button  type="PRIMARY">Cari Panti</Button>
          </Link>
        </section>
        <img
          src={berandaasuh}
          alt="berandaasuh"
          className="right-side-section"
        />
        <div className="rectangle-word-left">
          <img src={rectangleword} alt="rectangle-word-left" />
          <h4>Relawan</h4>
          <h5>200+</h5>
        </div>
        <div className="rectangle-word-right">
          <img src={rectangleword} alt="rectangle-word-right" />
          <h4>Donatur</h4>
          <h5>1.000+</h5>
        </div>
        <div className="rectangle-word-bottom">
          <h3>Salurkan</h3>
          <h3>Jariyahmu</h3>
        </div>
      </div>
      <section className="opsi-beranda">
        <h3>Peduli Panti Asuhan Kita</h3>
        <div className="hasil-opsi">
          <div className="the-option">
            <div className="option-icon">
              <IconHomeDollar />
            </div>
            <div className="option-word">
              <h5>Memberikan Donasi</h5>
              <p>
                Ayo salurkan dana mu sekarang untuk membantu meningkatkan
                kualitas panti asuhan
              </p>
            </div>
          </div>
          <div className="the-option">
            <div className="option-icon">
              <IconFileDescription />
            </div>
            <div className="option-word">
              <h5>Menjadi Relawan</h5>
              <p>
                Ayo tingkatkan peduli kita dengan menjadi relawan untuk
                perkembangan anak-anak di panti asuhan{" "}
              </p>
            </div>
          </div>
          <div className="the-option">
            <div className="option-icon">
              <IconFileDescription />
            </div>
            <div className="option-word">
              <h5>Melihat Informasi Panti Asuhan</h5>
              <p>
                Anda dapat melihat berbagai program dan informasi yang ada di
                Panti Asuhan
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="layanan-tersedia">
        <h2>Layanan yang Kami Sediakan</h2>
        <div className="layanan-content-swiper">
          {/* <div className='swiper-container-layanan'>
          <IconChevronLeft size={48} color="#3AB7FE"/>
          </div>      */}
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <div className="swiper-place-layanan">
              <SwiperSlide>
                <div className="layanan-content-list">
                  <img src="./assets/macbook.svg" alt="mac-book-img" />
                  <div className="layanan-word">
                    <h2>Pengelolaan Data Panti Asuhan</h2>
                    <p>
                      Bertekad menjadi lembaga pengelola dana yang berkhidmat
                      menangani anak yatim piatu serta memberdayakannya.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="layanan-content-list">
                  <img src="./assets/macbook_2.svg" alt="mac-book-img" />
                  <div className="layanan-word">
                    <h2>Layanan Donasi Untuk Panti Asuhan</h2>
                    <p>
                      Memberikan layanan penggalangan donasi untuk menunjang
                      kehidupan yang lebih baik untuk panti asuhan
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="layanan-content-list">
                  <img src="./assets/macbook_3.svg" alt="mac-book-img" />
                  <div className="layanan-word">
                    <h2>Layanan Relawan Untuk Panti Asuhan</h2>
                    <p>
                      Relawan dapat lebih mudah mendapatkan akses ke panti
                      asuhan untuk membantu anak-anak yang sedang membutuhkan
                      dengan layanan relawan.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          {/* <div className='swiper-container-layanan'>
          <IconChevronRight size={48} color="#3AB7FE"/>
        </div> */}
        </div>
        <Link>Mulai Daftar</Link>
      </section>
      <ListPantiAsuhan />
      <section className="tentang-kami-section">
        <div className="tentang-kami-left">
          <img
            src={linetentangkami}
            alt="line-tentang-kami"
            className="line-tentang-kami"
          />
          <img src={tentangkami} alt="tentang-kami" />
          <img
            src={dottentangkami}
            alt="dot-tentang-kami"
            className="dot-tentang-kami"
          />
        </div>
        <div className="tentang-kami-right">
          <h2>Tentang Kami</h2>
          <p>
            Panti Kita merupakan sebuah Website Online untuk panti asuhan dengan
            memberikan layanan untuk pengelolaan data-data yang ada di panti
            asuhan dengan lebih cepat, efesien dan praktis serta pihak panti
            dapat membuat deskripsi tentang panti asuhannya, membuka layanan
            donasi untuk umum dan juga relawan yang dapat membantu panti asuhan.
          </p>
        </div>
      </section>
      <section className="contact-form">
        <div className="contact-form-left">
          <div className="contact-form-left-title">
            <h2>Hubungi kami</h2>
            <p>Jika anda membutuhkan bantuan, kami siap selalu membantu</p>
          </div>
          <div className="contact-form-kontak">
            <h6>Kontak</h6>
            <div className="form-kontak-icon">
              <IconMapPin color="#3AB7FE" />
              <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div className="form-kontak-icon">
              <IconPhone color="#3AB7FE" />
              <p>(702) 555-0122</p>
            </div>
            <div className="form-kontak-icon">
              <IconMail color="#3AB7FE" />
              <p>(702) 555-0122</p>
            </div>
            <div className="form-kontak-sosialmedia">
              <h5>Sosial Media</h5>
              <div className="contact-icon-img">
                <IconBrandTwitter size={24} color="#3AB7FE" />
                <IconBrandFacebook size={24} color="#3AB7FE" />
                <IconBrandInstagram size={24} color="#3AB7FE" />
                <IconBrandTiktok size={24} color="#3AB7FE" />
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form-right">
          <h3>Ada Pertanyaan?</h3>
          <div className="contact-form-right-container">
            <div className="input-pertanyaan">
              <IconMail color="#3AB7FE" />
              <input placeholder="masukan email anda" />
            </div>
            <div className="input-pertanyaan">
              <IconQuestionMark color="#3AB7FE" />
              <input placeholder="ada pertanyaan?" />
            </div>
          </div>
          <Button className="button-primary">Kirim</Button>
        </form>
      </section>
           
      </div>
      <Footer/>
    </HOC>
  );
}

export default Beranda;
