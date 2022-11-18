import {useState} from 'react';
import {Link} from 'react-router-dom';
import { IconMapPin, IconFriends} from '@tabler/icons';
import fotoanakyatem from '../images/foto_anak_yatem.png';
import fotoanakyatemkedua from '../images/foto_anak_yatem_kedua.png';
import fotoanakyatemketiga from '../images/foto_anak_yatem_ketiga.png';
import '../pages/styles/beranda.css'
import Button from './Button';

function ListPantiAsuhan({setDonateToggle, donateToggle}) {
    const [searchTerm, setSearchTerm] = useState('');

    const [data, setData]= useState(
      {
      searchUser: [],
      listUser: [
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
      ]
    })

      const searchHandler = () =>{
            let findData = data.listUser.filter((datas) =>
              datas.nama_panti.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setData((prevState) => {
                return {
                  ...prevState,
                  searchUser: findData
                };
      });
      }

  return (
    <section className="list-panti-asuhan-kita">
        <header className="list-panti-navbar">
          <h2>Panti Asuhan Kita</h2>
          <nav className="list-panti-navbar-right">
            <input value ={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} placeholder="cari panti asuhan"/>
            <button onClick={searchHandler}>Cari</button>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </nav>
        </header>
        {data.searchUser.length === 0 
        ? data.listUser.map((datas, index)=>{
          return(
        <article className="container-data-panti-asuhan" key={index}>
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
                    <Button type="DONASI" onClick={()=>console.log("test")}>Donasi</Button>
                </div>
                <div className="opsi-user">
                  <div className="data-donasi-relawan">
                    <h5>Relawan</h5>
                    <h5>Kontak</h5>
                    <h5 className="data-angka-donasi-relawan">{datas.relawan} Orang</h5>
                    <h5 className="data-angka-donasi-relawan">{datas.no_tlp}</h5>
                    </div>
                    <Button  type="RELAWAN" onClick={()=>setDonateToggle(!donateToggle)}>Menjadi Relawan</Button>
                </div>
            </div>      
        </article>
            )
        }) : 
        data.searchUser.map((datas, index)=>{
          return(
            <article className="container-data-panti-asuhan" key={index}>
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
        </article>
          )
        })
        
        }
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
    </section>
  )
}

export default ListPantiAsuhan;