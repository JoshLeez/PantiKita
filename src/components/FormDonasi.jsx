import "./styles/form_donasi.css";
import { IconX } from '@tabler/icons';

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
      </div>
  </div>
  )
};

export default FormDonasi;
