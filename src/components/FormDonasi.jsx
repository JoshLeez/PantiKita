import "./styles/form_donasi.css";
import { IconX, IconUser, IconUpload, IconMapPin, IconFriends, IconPhone} from '@tabler/icons';
import Button from "./Button";
import InputLong from "./InputForm";

const FormDonasi = ({donateToggle, setDonateToggle}) => {
  return(
  <div className="background-donasi">
      <div className="donasi-form">
        <div className="donasi-title-container">
          <div className="donasi-title">
            <h4>Donasi</h4>
            <p>isi profile mu untuk kelengkapan laporan data panti asuhan</p>
          </div>
          <IconX onClick={()=>{setDonateToggle(!donateToggle)}}/>
        </div>
        <form className="form-pengisian-donasi">
          <div className="form-pengisian-kiri">
            <label className="donatur-radio-button">
              <h6>Donatur</h6>
              <div className="container-pilihan-donatur">
              <div className="pilihan-donatur">
                <input type="radio" name="donasi"/>
                <p>Individu</p>
              </div>
              <div className="pilihan-donatur">
                <input type="radio" name="donasi"/>
                <p>Komunitas</p>
              </div>
              <div className="pilihan-donatur">
                <input type="radio" name="donasi"/>
                <p>Instansi</p>
              </div>
              </div>
            </label>
            <div className="donatur-upload-gambar">
              <div className="donatur-gambar-default">
              <IconUser/>
              </div>
              <div className="right-side-donatur-upload">
                <div className="upload-button-container">
                  <div className="upload-button">
                  <input type="file" accept="image/png, image/jpeg"/>
                    <IconUpload/>
                    <p>Pilih File</p>
                  </div>
                  <p>Tidak ada file yang dipilih</p>
                </div>
                <p>Maksimal ukuran foto 2 MB.</p>
              </div>
            </div>
            <div className="input-form-donasi">
              <p>Nama Lengkap</p>
              <InputLong placeholder="nama lengkap"/>
            </div>
            <div className="input-form-donasi">
              <p>Email</p>
              <InputLong placeholder="email"/>
            </div>
            <div className="sembunyikan-identitas">
              <div className="checkbox-sembunyikan">
                <input type="checkbox"/>
                <h6>Sembunyikan Identitas</h6>
              </div>
              <p>
              Profile anda akan di tampilkan di halaman
               riwayat sebagai semangat untuk calon donatur lainnya
              </p>
            </div>
          </div>
          <div className="form-pengisian-kanan">
            <div className="top-profile-panti-form">
              <h6>Profile Panti</h6>
              <div className="detail-profile-panti-form">
                <h6>Panti Asuhan Yatim & Dhuafa Tanjung Barat</h6>
                <div className="form-profile-alamat">
                  <IconMapPin/>
                  <p>
                  Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung
                  Barat, Kec. Jagakarsa, Kota Jakarta Selatan, 
                  Daerah Khusus Ibukota Jakarta 12530.
                  </p>
                </div>
                <div className="form-profile-alamat">
                  <IconFriends/>
                  <p>
                    20 anak
                  </p>
                </div>
                <div className="form-profile-alamat">
                  <IconPhone/>
                  <p>
                  0857-1536-8904
                  </p>
                </div>
                <p>Pendiri : Muhammad Sumbul</p>
              </div>
            </div>
            <div className="bottom-tulis-komentar">
              <p>Tulis Komentar</p>
              <textarea placeholder="tulis komentar yang bermanfaat"/>
            </div>
          </div>
        </form>
        <Button type="DONASI">Lanjutkan Donasi</Button>
      </div>
  </div>
  )
};

export default FormDonasi;
