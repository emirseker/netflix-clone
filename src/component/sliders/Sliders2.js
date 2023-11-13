import React from 'react'
import Data from '../../Data/Datacomedy'
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import '../../styles/sliders.css';
import {AiFillPlayCircle,AiOutlinePlusCircle,AiOutlineLike,AiOutlineDownCircle} from 'react-icons/ai';


function Sliders() {
  Sliders.prototype.onMouseEnter = (event) => {
    event.target.querySelector('.cardslide-info').style.display = 'block';
  };
  
  Sliders.prototype.onMouseLeave = (event) => {
    event.target.querySelector('.cardslide-info').style.display = 'none';
  };
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 6,
    swipeToSlide: true,
    margin: 30,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className='tmy2'>
      <h2 className='başlık'>Komedi</h2>
      <Slider className='slider' {...settings}>
      {
        Data.map(item => (
          <div key={item.id} className='cardslide'>
          <div className='cardslide-top'>
            <img className='cardslide-image' src={item.imageUrl} alt=''/>
          </div>
          <div className='cardslide-info'>
            <div className='cardslide-info-container'>
              <div className='infoicon'>
                <AiFillPlayCircle/>
              <AiOutlinePlusCircle/>
              <AiOutlineLike/>
              <AiOutlineDownCircle className='downbutton'/>
              </div>
              
              <h3 className='cardslide-info-title'>{item.title}</h3>
              <div className='top1'>
                 <p className='MATCH'>%99 Eşleşme</p>
              <p className='HD'> HD</p>
              </div>
             
              <p className='cardslide-detail'>{item.detail}</p>
            </div>
          </div>
        </div>
        
        ))
      }
      </Slider>
    </div>
  )
}

export default Sliders
