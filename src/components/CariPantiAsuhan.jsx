import '../pages/styles/panti_asuhan_kita.css'

export const CariPantiAsuhan = () => {
  return (
<div className="left-panti-asuhan-kita-search-filter">
    <h2>Panti Asuhan Kita</h2>
    <p>
    Memaksimalkan layanan panti asuhan yang sudah terdaftar  yang  bekerjasama 
    dengan panti kita untuk meningkatkan para donatur dan relawan. Di mana website 
    ini berfungsi sebagai perantara dengan panti-panti asuhan lainnya dan sangat 
    bermanfaat untuk anak-anak yatim piatu atau dhuafa.		
    </p>
    <div className="left-panti-asuhan-kita-search-button">
        <input placeholder="cari panti asuhan"/>
        <button>Cari</button>	
    </div>
    <div className="container-animation-data-panti">
        <marquee direction="left" id="animation-container-data-panti" >
            <div className="triple-container-animation">
                <div>
                    <h6>Panti Asuhan Yang Terdaftar</h6>
                    <h5><span>107</span> Panti Asuhan</h5>
                </div>
                <div>
                    <h6>Donatur yang Terdaftar</h6>
                    <h5><span>1.080 </span> Donatur</h5>
                </div>
                <div>
                    <h6>Relawan yang Terdaftar</h6>
                    <h5><span>214</span> Relawan</h5>
                </div>
            </div>
        </marquee>
    </div>
</div>
  )
}
