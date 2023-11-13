import React from 'react'
import Logo from '../media/logo.png'
import '../styles/navbar.css'
import Language from './Language'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='position-absolute top-0 d-flex justify-content-center w-100'>
        <div className='landing-navbar'>
            <div className='d-flex w-100'>
                <img src={Logo} alt="logo" className='logo' />
                </div>
                <Language/>
                <Link to='./İçerik'><div className='button'>Oturum Aç</div></Link>
            </div>
    </div>
  )
}

export default Navbar