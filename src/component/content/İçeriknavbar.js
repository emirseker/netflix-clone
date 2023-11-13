import React, { useState } from 'react';
import Logo from '../../media/logo.png'
import '../../styles/içeriknavbar.css'
import { Link } from 'react-router-dom'
import {TbSearch,TbBell, TbPlayerPlayFilled } from 'react-icons/tb'
import profileimage from '../../media/profileimage.png'


function İçeriknavbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInput = () => {
    setIsVisible(!isVisible);
  }
  
        
  return (
    <div className='naVbar'>
        <div className='navbarlanding'>
            <div className='logo-menu'>
               <Link to="/"><img src={Logo} alt="logo" className='logo' /></Link> 
                <div className='menu'>
                     <Link to="/İçerik">Anasayfa </Link>
            <Link to="/Tvshow">Diziler </Link>
            <Link to="/Film">Filmler </Link>
            <Link to="/Newpopular">Yeni ve Popüler </Link>
            <Link to="/Mylist">Listem  </Link>
            <Link to="/Browsemylanguage">Dile Göre Göz At  </Link>
            
                </div>
             
                </div>
                <div className='icon'>
                <div className={`animated-input ${isVisible ? 'visible' : ''}`}>
             <TbSearch onClick={toggleInput} />
      {isVisible && <input type="text" placeholder="Açılıp Kapanabilen Input" />}
    </div>
                
                <TbBell  />
                <img src={profileimage} alt="profileimage" style={{borderRadius:'4px'}} />
                <TbPlayerPlayFilled className='navigation-item arrow-display'  style={{transform:'rotate(90deg)', fontSize:'10px', marginLeft:'1px', marginRight:'0px'}} />
                </div>
                
            </div>
    </div>
  )
}

export default İçeriknavbar