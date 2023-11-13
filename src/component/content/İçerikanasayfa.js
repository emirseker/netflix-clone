import React from 'react'
import Mountaın from '../../media/AAAABWSg0WSwZEIg2-O0dPzG3UhUBIVHEiHIUvzqjhabVMamZID8nVkw5jWd3zG95r6bW2FKJxTkS2uhoym0LogjJIzWHt4TcqHHTnds.jpg'
import '../../styles/içeriknavbar.css'
import Logo from '../../media/AAAABcg5zx8wTH4gR55ziVrN-iH9eAmxoRDkYuTdvX_-lso3EY28zM5gicqTjB1U-BF3m75v5Gg7qzWlHp-4Bf2z6qkiQlVzdI_sNeZ6E8b0lISr.png'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import  Sliders  from '../sliders/Sliders'
import Sliders2 from '../sliders/Sliders2'
import Sliders3 from '../sliders/Sliders3'
import Sliders4 from '../sliders/Silders4'
import Footer from '../Footer'

function İçerikanasayfa() {
  return (

    <div className='en'>
      <div>
        <img src={Logo} alt="" className='logodag' />
        <h1 className='name'> DAĞ II </h1>
        <h3 className='inform'>2016 | 16+ | 2 sa. 14 dk. | Aksiyon</h3>
        <div className='detail'>
        Bir terör örgütü tarafından kaçırılan gazeteci kadını kurtarmakla görevlendirilen Özel Kuvvetler, hainlerle dolu tehlikeli bir operasyona atılır.
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
            
            <img src={Mountaın} alt="hero" className='arkaplan' />
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