import {
  IconHeartHandshake,
  IconMapPin,
  IconUpload,
  IconUser,
  IconX,
} from "@tabler/icons";
import { Mail, Phone } from "tabler-icons-react";
import "../components/styles/form_relawan.css";
import Button from "./Button";
import { InputMedium } from "./InputForm";
import "./styles/popup_kecil.css";

const FormRelawan = ({ setRelawanToggle, relawanToggle,iyaTidakToggle, setIyaTidakToggle }) => {

  return (
    <div className="background-donasi">
      <div className="donasi-form">
        <div className="donasi-title-container">
          <div className="donasi-title">
            <h4>Menjadi Relawan</h4>
          </div>
          <IconX
            className="form-donasi-cancel"
            onClick={() => {
              setRelawanToggle(!relawanToggle);
            }}
          />
        </div>
        <div className="menjadi-relawan-first-container">
          <div className="left-side-menjadi-relawan">
            <div className="top-menjadi-relawan-upload">
              <div className="donatur-upload-gambar">
                <div className="donatur-gambar-default">
                  <IconUser />
                </div>
                <div className="right-side-donatur-upload">
                  <div className="upload-button-container">
                    <div className="upload-button">
                      <input type="file" accept="image/png, image/jpeg" />
                      <IconUpload />
                      <p>Pilih File</p>
                    </div>
                    <p>Tidak ada file yang dipilih</p>
                  </div>
                  <p>Maksimal ukuran foto 2 MB.</p>
                </div>
              </div>
              <div className="sembunyikan-identitas">
                <div className="checkbox-sembunyikan">
                  <input type="checkbox" />
                  <h6>Sembunyikan Identitas</h6>
                </div>
                <p>
                  Profile anda akan di tampilkan di halaman riwayat sebagai
                  semangat untuk calon relawan lainnya
                </p>
              </div>
            </div>
            <label className="mengisi-input-data-relawan">
              <div className="wrapper-input-relawan">
                <div className="input-form-donasi">
                  <p>Nama Depan</p>
                  <InputMedium placeholder="nama depan" />
                </div>
                <div className="input-form-donasi">
                  <p>Nama belakang</p>
                  <InputMedium placeholder="nama belakang" />
                </div>
              </div>
              <div className="wrapper-input-relawan">
                <div className="input-form-donasi">
                  <p>No. Hp</p>
                  <InputMedium placeholder="nomor handphone" />
                </div>
                <div className="input-form-donasi">
                  <p>Email</p>
                  <InputMedium placeholder="email" />
                </div>
              </div>
              <div className="wrapper-input-relawan">
                <div className="input-form-donasi">
                  <p>Umur</p>
                  <InputMedium type="number" placeholder="umur" />
                </div>
                <div className="input-form-donasi">
                  <p>Gender</p>
                  <div className="container-pilihan-donatur">
                    <div className="pilihan-gender">
                      <input type="radio" name="donasi" />
                      <p>Laki-laki</p>
                    </div>
                    <div className="pilihan-gender">
                      <input type="radio" name="donasi" />
                      <p>Perempuan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper-input-relawan">
                <div className="input-form-donasi">
                  <p>Pekerjaan</p>
                  <InputMedium placeholder="pekerjaan" />
                </div>
                <div className="input-form-donasi">
                  <p>Jenis Relawan</p>
                  <InputMedium placeholder="jenis relawan" />
                </div>
              </div>
            </label>
          </div>
          <div className="right-side-jadi-relawan">
            <div className="top-card-lengkapi-profile">
              <div className="top-lengkapi-profile">
                <div className="progress-daftar-relawan">
                  <h6>Lengkapi Profile Anda</h6>
                  <h4>100%</h4>
                </div>
                <div className="top-bottom-lengkapi-profile">
                  <div className="progressbar-lengkapi-relawan" />
                  <p>
                    Tingkatkan profil untuk meningkatkan kredibilitas anda
                    sebagai relawan
                  </p>
                </div>
              </div>
              <div className="bottom-lengkapi-profile">
                <IconHeartHandshake />
                <p>
                  data anda diperlukan agar pihak panti dapat dengan mudah
                  menghubungi anda untuk kersama lebih lanjut
                </p>
              </div>
            </div>
            <div className="bottom-kontak-kami-relawan">
              <h6>Kontak Kami</h6>
              <div className="alamat-model-relawan">
                <div className="icon-dan-lokasi-model-relawan">
                  <IconMapPin />
                  <p>
                    Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec.
                    Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota
                    Jakarta 12530.
                  </p>
                </div>
                <div className="icon-dan-lokasi-model-relawan">
                  <Phone />
                  <p>0857-1536-8904</p>
                </div>
                <div className="icon-dan-lokasi-model-relawan">
                  <Mail />
                  <p>agussalim01@gmail.com</p>
                </div>
              </div>
            </div>
            <button
              className="button-relawan-model"
              onClick={() => {
                setIyaTidakToggle(!iyaTidakToggle);
              }}
            >
              Daftar Relawan
            </button>
          </div>
        </div>
        <p className="bottom-word-relawan">
          Dengan mendaftar sebagai relawan di PANTI KITA anda telah menyetujui{" "}
          <span>persyaratan</span> & <span>kebijakan privasi</span>
        </p>
      
      </div>
    </div>
  );
};

export default FormRelawan;

export const Popupchoice = (props) => {


  const nextRelawanHandler = () => {
    props.setIyaTidakToggle(!props.iyaTidakToggle);
    props.setRelawanToggle(!props.relawanToggle);
    props.setFormRelawan2(!props.formRelawan2)
  };

  return (
    <div className="background-popup">
      <div className="ya-dan-tidak">
        <div className="wrapper-iya-tidak">
          <div className="judul-top-iya-tidak">
            <h6>Ingatkan Kembali</h6>
            <p>Apakah anda yakin untuk mendaftar sebagai relawan?</p>
          </div>
          <div className="button-wrapper-ya-tidak">
            <button
              onClick={() => {
                props.setIyaTidakToggle(!props.iyaTidakToggle);
              }}
            >
              Tidak
            </button>
            <button onClick={nextRelawanHandler}>Ya</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export const FormRelawan2 = (props) => {
  return (
    <div className="background-donasi">
      <div className="donasi-form">
        <div className="donasi-title-container">
          <div className="donasi-title">
            <h4>Menjadi Relawan</h4>
          </div>
          <IconX
            className="form-donasi-cancel"
            onClick={() => {
              props.setFormRelawan2(!props.formRelawan2);
            }}
          />
        </div>
        <div className="container-relawan-kedua">
            <div className="left-relawan-kedua">
                <div className="center-left-word-relawan">
                    <img src="./assets/verifikasi.svg" alt="verifikasi"/>
                    <h4>Anda Berhasil Menjadi Relawan Panti Kita!</h4>
                    <p>
                    Selamat anda telah mendaftar sebagai relawan segera hubungi pihak panti untuk kerjasama lebih lanjut. Silahkan cek secara berkal
                    atau hubungi team <span className="panti-word">PANTI</span> <span className="kita-word">KITA</span> untuk info lebih lanjut. 
                    </p>
                </div>
                <Button type="RELAWAN">Hubungi 0857-1536-8904</Button>
            </div>
            <div className="right-relawan-kedua">
                <h6>Profile Anda</h6>
                <img src="./assets/relawan_foto2.svg" alt="fp-relawan"/>
                <div className="data-form-relawan">
                            <div className="form-relawan-kiri">
                                <p>Nama</p>
                                <p>No. Hp</p>
                                <p>Email</p>
                                <p>Gender</p>
                                <p>Umur</p>
                                <p>Pekerjaan</p>
                                <p>Jenis Relawan</p>
                                <p>Jadi Relawan</p>
                            </div>
                            <div className="titik-dua-form-relawan">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="form-relawan-kanan">
                                <p>Liliosa</p>
                                <p>0839-2313-2148</p>
                                <p>liliosa@gmail.com</p>
                                <p>Perempuan</p>
                                <p>30</p>
                                <p>Perawat</p>
                                <p>Tenaga Kesehatan</p>
                                <p>22 Juli 2022</p>
                            </div>
                        </div>
            </div>
        </div>
        <p className="bottom-word-relawan">
          Dengan mendaftar sebagai relawan di PANTI KITA anda telah menyetujui{" "}
          <span>persyaratan</span> & <span>kebijakan privasi</span>
        </p>
      </div>
    </div>
  );
};
