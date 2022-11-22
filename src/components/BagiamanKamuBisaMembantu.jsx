import { IconMapPin } from "@tabler/icons"
import { Mail, Phone } from "tabler-icons-react"
import Button from "./Button"


const BagiamanKamuBisaMembantu = () => {
  return (
<section className='laporan-terbaru-donasi'>
        <h3>Cara Lain Untuk Membantu</h3>
        <div className='artikel-pendidikan-anak-asuh'>
            <aside className='left-side-pendidikan-anak-asuh'>
              <h6>Jenis Donasi</h6>
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
                    <div className="bola-capaian-progress"></div>
                  </div>
                  <div className='garis-progress-donasi'>
                  </div>
                  <div className="bola-progress-donasi">
                  </div>
                </div>
                  <div className='progressbar-right-side-membantu'>
                    <div className='inside-progressbar-right'>
                      <h6>Pakaian</h6>
                      <p className='progress-word'>Anda dapat berdonasi Baju, celana dll</p>
                    </div>
                    <div className='inside-progressbar-right'>
                      <h6>Makanan</h6>
                      <p className='progress-word'>Anda juga dapat berdonasi Beras dan bahan pangan lainnya.</p>
                    </div> 
                    <div className='inside-progressbar-right'>
                      <h6>Buku</h6>
                      <p className='progress-word'>Anda juga dapat mendonasikan buku yang sudah tidak dipakai</p>
                    </div>
                    <div className='inside-progressbar-right'>
                      <h6>Dll</h6>
                      <p className='progress-word'>Barang itu tidak berarti bagi anda tapi sangat berarti buat kami.</p>
                    </div>
                  </div>
              </div>
            </aside>
            <div className='right-side-pendidikan-anak-asuh'>
                <h3>Bagaimana Kamu Bisa Membantu</h3>
                <p>
                Bagaimana Kamu bisa membantu kami yang bukan 
                berupa uang tunia? selain Anda dapat membantu 
                dengan uang uang tunai, Anda dapat juga membantu 
                kami dengan berbagai hal seperti pakaian, makanan
                 dan lain-lain yang dapat membantu mereka untuk 
                 mendapat kelayakan lebih baik di panti asuhan 
                 kami. Rasulullah Saw bersabda; "Sedekah itu tidak 
                 akan mengurangi harta. Tidak ada orang yang memberi 
                 maaf kepada orang lain, melainkan Allah akan menambah
                  kemuliaannya. Dan tidak ada orang yang merendahkan 
                  diri karena Allah, melainkan Allah akan mengangkat 
                  derajatnya." (HR. Muslim)
                </p>
                <p className="p-bottom-membantu-kami">
                Sebelum mendonasikan barang, silahkan hubungi kami terlebih dahulu untuk kerja sama lebih lanjut sesuai dengan kontak kami di bawah ini.
                </p>
                <div className="kontak-kami-membantu">
                    <h5>Kontak</h5>
                    <div className="membantu-kami-lokasi">
                        <IconMapPin/>
                        <p>
                        Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12530.
                        </p>
                    </div>
                    <div className="membantu-kami-lokasi">
                        <Phone/>
                        <p>0857-1536-8904</p>
                    </div>
                    <div className="membantu-kami-lokasi">
                        <Mail/>
                        <p>agussalim01@gmail.com</p>
                    </div>
                </div>
                <Button type="RELAWAN">Hubungi 0857-1536-8904</Button>
            </div>
        </div>
      </section>
  )
}

export default BagiamanKamuBisaMembantu