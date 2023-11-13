import React from 'react'

import '../styles/navbar.css'
import  heroimage  from '../media/heroimage.jpg'
import { VscChevronRight} from "react-icons/vsc";

function Home() {



  return (

    
    <div>
        
        
          
        <div className='position-relative hero'>
        <div className='hero-box'>
        
            <div className='hero-title'>Sınırsız film, dizi ve çok daha fazlası</div>
            <div className='hero-text' style={{marginTop:'1rem'}}>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</div>
            <h3 className='hero-text-title' >İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.</h3>
            <div className='giris'>
            <label for="myInput"></label>
              <input className='input'type='email' name="email"  placeholder="E-posta adresi"></input>
              <button className='button' >Başlayın<VscChevronRight/></button>
            </div>
            
        </div>
        <div className='image-container'>
            <img src={heroimage} alt="hero" className='image' />
            <div className='shadow'></div>
        </div>
    </div>
        <div className='arageçis'>
          
        
        </div>
        
    </div>
   
   
  )
}

export default Home