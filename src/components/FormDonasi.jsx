import "./styles/form_donasi.css";
import { IconX, IconUser, IconUpload, IconMapPin, IconFriends, IconPhone, IconMail, IconBuildingBank, IconArrowLeft, IconDownload} from '@tabler/icons';
import Button from "./Button";
import InputLong from "./InputForm";
import { Link } from "react-router-dom";
import { PANTI_ASUHAN_KITA } from "../pages/Router";


const FormDonasi = (props) => {
  
  
 const nextFormHandler = () =>{
    props.setDonateToggle(!props.donateToggle)
    props.setFormDonasi2(!props.formDonasi2)
 }
 
  return(
  <div className="background-donasi">
      <div className="donasi-form">
        <div className="donasi-title-container">
          <div className="donasi-title">
            <h4>Donasi</h4>
            <p>isi profile mu untuk kelengkapan laporan data panti asuhan</p>
          </div>
          <IconX className="form-donasi-cancel" onClick={()=>{props.setDonateToggle(!props.donateToggle)}}/>
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
      <Button onClick={nextFormHandler} type="DONASI">Lanjutkan Donasi</Button>
      </div>
  </div>
  )
};

export default FormDonasi;


export const FormDonasi2 = (props) => {

  const formBackHandler = () =>{
    props.setDonateToggle(!props.donateToggle)
    props.setFormDonasi2(!props.formDonasi2)
  }

  const secondNextFormHandler = () =>{
    props.setFormDonasi3(!props.FormDonasi3)
    props.setFormDonasi2(!props.formDonasi2)
  }

  return (
    <div className="background-donasi">
      <div className="donasi-form">
      <div className="donasi-title-container">
        <IconArrowLeft onClick={formBackHandler} className="form-donasi-back"/>
          <div className="donasi-title">
            <h4>Donasi</h4>
            <p>Inputkan jumlah donasi untuk berdonasi ke panti</p>
          </div>
          <IconX className="form-donasi-cancel" onClick={()=>{props.setFormDonasi2(!props.formDonasi2)}}/>
        </div>
        <div className="second-container-input-jumlah">
          <div className="isi-nominal-container">
            <div className="judul-isi-nominal">
              <h6>Isi Nominal Donasi</h6>
              <p>
              Harap tentukan jumlah uang yang ingin anda sumbangkan untuk tujuan ini. 
              kamu bisa pilih salah satu opsi di bawah ini
              </p>
            </div>
            <div className="option-nominal-donasi">
              <button>Rp. 10.000,-</button>
              <button>Rp. 250.000,-</button>
              <button>Rp. 50.000,-</button>
              <button>Rp. 500.000,-</button>
              <button>Rp. 100.000,-</button>
              <button>Rp. 1.000.000,-</button>
            </div>
            <div className="masukan-jumlah-inginkan">
              <p>Atau masukkan jumlah yang ingin anda inginkan disini:</p>
              <InputLong placeholder="Rp. 0"/>
            </div>
          </div>
          <div className="right-side-input-jumlah">
            <div className="kontak-nomor-email">
              <h6>Kontak Kami</h6>
              <div className="icon-and-data">
                <IconPhone/>
                <p>0857-1536-8904</p>
              </div>  
              <div className="icon-and-data">
                <IconMail/>
                <p>agussalim01@gmail.com</p>
              </div>  
            </div>
            <div className="metode-pembayaran">
              <h6>Pilih Rekening yang Tersedia</h6>
              <div className="selection-pembayaran">
                <IconBuildingBank/>
                <select>
                  <option>1542-5173-2374-422</option>
                </select>
              </div>        
            </div>
            <div className="metode-pembayaran">
              <h6>Pilih Metode Pembayaran</h6>
              <div className="selection-pembayaran">
                <IconBuildingBank/>
                <select>
                        <option>BRI</option>
                        <option>BCA</option>
                        <option>OVO</option>
                        <option>GoPay</option>
                        <option>Dana</option>
                </select>
              </div>        
            </div>
          </div>  
        </div>
        <Button type="DONASI" onClick={secondNextFormHandler}>Donasi Sekarang</Button>
      </div>
    </div>
  )
}


export const FormDonasi3 = (props) => {
  return (
    <div className="background-donasi">
    <div className="donasi-form">
      <div className="donasi-title-container">
        <div className="donasi-title">
          <h4>Donasi</h4>
          <p>Lunaskan pembayaran donasi</p>
        </div>
        <IconX className="form-donasi-cancel" onClick={()=>{props.setFormDonasi3(!props.formDonasi3)}}/>
      </div>
      <div className="form-donasi-ketiga">
        <h6>Lakukan pembayaran donasi anda sebelum <span>tanggal 8 November 2022 16.00 WIB</span></h6>
        <div className="id-dan-nominal">
            <div className="id-pembayaran-container">
              <p>ID Pembayaran</p>
              <div className="data-pembayaran-id">
                <img src="./assets/dana.svg" alt="metode-dana"/>
                <h6>3491236214</h6>
                <p>salin</p>
              </div>
            </div>
            <div className="id-pembayaran-container">
              <p>ID Pembayaran</p>
              <div className="data-pembayaran-id">
                <img src="./assets/dana.svg" alt="metode-dana"/>
                <h6>3491236214</h6>
                <p>salin</p>
              </div>
            </div>
        </div> 
        <div className="center-form-donasi-ketiga">
            <div className="container-pembayaran-ke">
              <p>Pembayaran ke</p>
              <div className="data-pembayaran-ke">
                  <p>Nama Pemilik : <span>Agus Salim</span></p>
                  <p>No. Rekening  : <span>1542-5173-2374-123</span></p>
              </div>
            </div>
            <div className="no-invoice">
              <h6>No. Invoice</h6>
              <p>INV-0238127466124</p>
            </div>
            <div className="wrapper-status-pembayaran">
              <p>Status Pembayaran</p>
              <p>Pembayaran belum dilunaskan</p>
            </div>
            <p>
            Status pembayaran akan dikirim lewat email yang telah 
            anda inputkan. Ayo segera lunaskan donasi anda. Dengan 
            sedikit bantuan anda diharapkan menjadi amal jariyah 
            yang tidak akan pernah putus. 
            </p>
            <button><IconDownload/>Download</button>
        </div>    
      </div>
      <Link to={PANTI_ASUHAN_KITA}>
      <Button type="PRIMARY" onClick={()=>props.setFormDonasi3(!props.formDonasi3)}>Lihat Panti Asuhan Lainnya</Button>
      </Link>
    </div>
    </div>
  )
}
