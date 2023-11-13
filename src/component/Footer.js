import React from 'react'
import '../styles/footer.css'
import Language from './Language'


const footer = () => {



  return (
    <div className='position-relative footer-container'>
        <div className="footer-box">
            
            <div className='footer-head'>Questions? Call <a href='tel:0850-000-0000' className='link'>0850-390-7444</a></div>
            <div className='list-container'>
                <ul className='list'>
                    <li className='list-item'><a href='#/' className='link2'>SSS</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Yardım Merkezi</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Hesap</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Medya Merkezi</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Yatırımcı İlişkileri</a></li>
                    <li className='list-item'><a href='#/' className='link2'>İş İmkanları</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Hediye Kartı Kullan</a></li>
                    <li className='list-item'><a href='#/' className='link2'>İzleme Yolları</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Kullanım Koşulları</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Gizlilik</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Çerez Tercihleri</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Kurumsal Bilgiler</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Bize Ulaşın </a></li>
                    <li className='list-item'><a href='#/' className='link2'>Hız Testi</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Yasal Hükümlülükler</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Sadece Netflix'te</a></li>
                </ul>
            </div>
          <div style={{paddingTop: '0.75rem', paddingBottom: '0.75rem', alignSelf: 'start'}}>
            <Language />
          </div>
          <div className='footer-head'>Netflix Turkiye</div>
        
        </div>
        <div className='card-bar'></div>
        
    </div>
  )
}

export default footer