import HOC from "../components/HOC";
import { NavbarDetailProfilePanti } from "../components/Navbar";
import "./styles/jadi_relawan.css";
import { IconMapPin } from "@tabler/icons";
import { Phone, Mail } from "tabler-icons-react";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Jadi_Relawan = () => {
  return (
    <HOC title="Panti Kita - Jadi Relawan">
      <NavbarDetailProfilePanti />
      <div className="hoc-container">
        <section className="top-jadi-relawan">
          <div>
            <div className="top-jadi-relawan-left">
              <div>
                <h5>Ayo Jadi Bagian Dari Kami</h5>
                <p>
                  Daftar disini dan hubungi kami untuk kerja sama lebih lanjut.
                </p>
              </div>
              <div className="jadi-relawan-kontak">
                <h5>Kontak</h5>
                <div className="membantu-kami-lokasi">
                  <IconMapPin />
                  <p>
                    Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec.
                    Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota
                    Jakarta 12530.
                  </p>
                </div>
                <div className="membantu-kami-lokasi">
                  <Phone />
                  <p>0857-1536-8904</p>
                </div>
                <div className="membantu-kami-lokasi">
                  <Mail />
                  <p>agussalim01@gmail.com</p>
                </div>
              </div>
              <Button type="RELAWAN">Menjadi Relawan</Button>
            </div>
            <img src="./assets/foto_jadi_relawan.svg" alt="foto-jadi-relawan"/>
          </div>
        </section>
        <section className="bottom-jadi-relawan">
            <div className="yang-kami-butuhkan">
                <h6>Yang Kami Butuhkan :</h6>
                <p>
                untuk jadi bagian dari kami tidak harus mempunyai pesyaratan apapun, 
                asalkan relawan dapat kerja secara ikhlas dan dapat membantu anak-anak asuh kami. Terimaksih
                </p>
            </div>
            <div className="riwayat-relawan-panti-kita">
                <h3>Riwayat Relawan Panti Kita</h3>
                <div className="list-card-relawan">
                    <div className="card-profile-relawan">
                        <img src="./assets/relawan_foto.svg" alt="fp relawan"/>
                        <div className="data-lengkap-relawan">
                            <div className="data-relawan-kiri">
                                <p>Nama</p>
                                <p>Gender</p>
                                <p>Umur</p>
                                <p>Mendaftar</p>
                                <p>Pekerjaan</p>
                                <p>Jenis Relawan</p>
                            </div>
                            <div className="titik-dua-relawan">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="data-relawan-kanan">
                                <p>Sulaiman</p>
                                <p>Laki-laki</p>
                                <p>30</p>
                                <p>22 Juli 2022</p>
                                <p>Guru SMA</p>
                                <p>Tenanga Pendidikan</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-profile-relawan">
                        <div className="relawan-tanpa-fp">
                            <h3>OB</h3>
                        </div>
                        <div className="data-lengkap-relawan">
                            <div className="data-relawan-kiri">
                                <p>Nama</p>
                                <p>Gender</p>
                                <p>Umur</p>
                                <p>Mendaftar</p>
                                <p>Pekerjaan</p>
                                <p>Jenis Relawan</p>
                            </div>
                            <div className="titik-dua-relawan">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="data-relawan-kanan">
                                <p>Orang Baik</p>
                                <p>Laki-laki</p>
                                <p>29</p>
                                <p>22 Juli 2022</p>
                                <p>Guru Honorer</p>
                                <p>Tenanga Pendidikan</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-profile-relawan">
                        <img src="./assets/relawan_foto2.svg" alt="fp relawan"/>
                        <div className="data-lengkap-relawan">
                            <div className="data-relawan-kiri">
                                <p>Nama</p>
                                <p>Gender</p>
                                <p>Umur</p>
                                <p>Mendaftar</p>
                                <p>Pekerjaan</p>
                                <p>Jenis Relawan</p>
                            </div>
                            <div className="titik-dua-relawan">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="data-relawan-kanan">
                                <p>Liliosa</p>
                                <p>Perempuan</p>
                                <p>30</p>
                                <p>22 Juli 2022</p>
                                <p>Perawat</p>
                                <p>Tenaga Kesehatan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      <Footer/>
    </HOC>
  );
};

export default Jadi_Relawan;
