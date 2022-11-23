import '../pages/styles/panti_asuhan_kita.css';
import { IconAdjustmentsHorizontal,IconReload ,IconHeartHandshake, IconFriends, IconKey, IconCoin, IconBuildingSkyscraper, IconBuildingCommunity  } from '@tabler/icons';
import Button from './Button';

const   Filter = () => {
  return (
<form className="right-panti-asuhan-kita-search-filter">
    <div className="right-panti-asuhan-filter-judul">
        <IconAdjustmentsHorizontal/>
        <h5>Filter</h5>
    </div>
        <div className="right-panti-asuhan-filter-input">
            <div className="input-filter-panti">
                <h6>Kata Kunci</h6>
                <div className="input-layout-filter">
                    <IconKey color="#3AB7FE"/>
                    <input placeholder="kata kunci"/>
                </div>		
            </div>
            <div className="input-filter-panti">
                <h6>Range Donasi Terkumpul</h6>
                <div className="input-layout-filter">
                    <IconCoin  color="#3AB7FE"/>
                    <input placeholder='range donasi terkumpul'/>
                </div>		
            </div>
            <div className="input-filter-panti">
                <h6>Provinsi</h6>
                <div className="input-layout-filter">
                    <IconBuildingSkyscraper  color="#3AB7FE"/>
                    <input placeholder='provinsi'/>
                </div>		
            </div>
            <div className="input-filter-panti">
                <h6>Kabupaten/Kota</h6>
                <div className="input-layout-filter">
                    <IconBuildingCommunity color="#3AB7FE"/>
                    <input placeholder='kabupaten/kota'/>
                </div>		
            </div>
    </div>
    <div className='container-range-slider'>
        <div className='title-range-slider'>
             <IconHeartHandshake color='#3AB7FE'/>
             <h5>Jumlah Relawan</h5>
        </div>
        <input type="range"/>
        <div className='title-range-slider'>
             <IconFriends  color='#3AB7FE'/>
             <h5>Anak Asuh</h5>
        </div>
        <input type="range"/>
    </div>
    <div className='bottom-filter'>
        <Button type="PRIMARY">Cari</Button>
        <div className='reset-button'>
            <IconReload/>
            <p>Reset</p>
        </div>
    </div>
</form>
  )
}

export default Filter