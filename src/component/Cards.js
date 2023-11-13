import React from 'react';
import '../styles/cards.css'
import tvpng from '../media/tv.png'
import devicespng from '../media/devices.png'
import stposter from '../media/stpostersmall.png'
import downloadgif from '../media/downloadgif.gif'
import mobileimg from '../media/mobileimg.jpg'
import kidspng from '../media/kidspng.png'
import videotv from '../media/videotv.mp4'
import videodevices from '../media/videodevices.mp4'


const CardsLanding = () => {

  
  return (
    <>
    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>Televizyonunuzda izleyin</div>
            <div className='card-text'>Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</div>
          </div>
          <div className='card-column'>
              <img src={tvpng} className='d-flex w-100 h-100 z-2' alt="tv" />
              <video className='video1' autoPlay loop muted playsInline>
               <source src={videotv} type='video/mp4'></source>
              </video>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={mobileimg} className='d-flex w-100 h-100 z-2' alt="mobile" />
              <div className='status-box'>
                <img className='poster' src={stposter} alt="strangerthings-download" />
                <div className='text-box'>
                  <div className='status-title'>Stanger Things</div>
                  <div className='status-text'>İndiriliyor...</div>
                </div>
                <img className='download-gif' src={downloadgif} alt="downloadgif" />
              </div>
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Çevrimdışı izlemek için içerikleri indirin</div>
            <div className='card-text'>En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.</div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>İstediğiniz her yerde izleyin</div>
            <div className='card-text'>Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.</div>
          </div>
          <div className='card-column'>
              <img src={devicespng} className='d-flex w-100 h-100 z-2' alt="devices" />
              <div className='video-box'>
                <video className='video2' autoPlay loop muted playsInline>
                <source src={videodevices} type='video/mp4'></source>
                </video>
              </div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={kidspng} className='d-flex w-100 h-100 z-2' alt="kids" />
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Çocuklarınız için profiller oluşturun</div>
            <div className='card-text'>Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.</div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>
    </>
  )
}

export default CardsLanding