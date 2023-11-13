import React from 'react'
import lacasa from '../../media/AAAABaJJIdyKMNvEcWhAtI5Xk12MQLY8DLxAkM2k8unVHyRordNL9Jn726cLoEmP_DAn44vwE3_l9dWTpDQTvmzsk6REyj4veXm9bvQ8.jpg'
import '../../styles/içeriknavbar.css'
import Logo from '../../media/AAAABRRyvRuiMMCrgMCHr15YC_C4BSsVcApNUaAC5fOAXr3Ilz6bXNR1zecr_D1YTTpq-1LeD1v2KIphBhjA8tgNXq3uq-N1Hhxd_LozryFb5Q1D9OsIUsHnc4GQrdgxnemRko9XF0VI4MNN9lz_b78ZhmGQcq3qq01WwwkiROVb6bRuozEPWUX.png'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import  Sliders  from '../sliders/Sliders'
import Sliders2 from '../sliders/Sliders2'
import Sliders3 from '../sliders/Sliders3'
import Sliders4 from '../sliders/Silders4'
import Footer from '../Footer'
import İçeriknavbar from './İçeriknavbar'

function İçerikanasayfa() {
  return (

    <div className='en'>
        <İçeriknavbar/>
      <div>
        <img src={Logo} alt="" className='logodag' />
        <h1 className='name'>La casa de papel</h1>
        <h3 className='inform'>2017 | 18+ | 5 Sezon | Gerilim</h3>
        <div className='detail'>
        Bir suç dehası planını gerçekleştirmek üzere polisi ustalıkla yönlendirirken sekiz hırsız, rehineler alarak kendilerini İspanya Kraliyet Darphanesine kilitler.
        </div>
        <div className='buttontotal'>
          <button className='buttonplay' > <FaPlay/>
         <div className='playcontent'>Play</div>
         </button>
        <button className='buttoninfo'> <AiOutlineInfoCircle/>
        <div className='infocontent'>Daha Fazla Bilgi</div>
        </button>
        </div>
        
        
      </div>
      
       <div className='içerikarkaplan'>
            
            <img src={lacasa} alt="hero" className='arkaplan' />
              <div className='slidertop1'>
            <Sliders/>
            <Sliders2/>
            <Sliders3/>
            <Sliders4/>
            <Footer/>
          </div>
          
        
           
        </div>
       
         
        </div>
   
        
  )
}

export default İçerikanasayfa