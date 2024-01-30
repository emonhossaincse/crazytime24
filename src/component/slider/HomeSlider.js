import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle,  faTelegram, faLine, faSteam, faGoogleWallet} from '@fortawesome/free-brands-svg-icons';



const HomeSlider = () => {
  
    

  const slickSettingsImages = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
 <div className='max-width home-slider'>

<div className='container'>
<Slider {...slickSettingsImages}>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-01.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-02.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-03.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-01.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-02.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="img_carsul">
              <a href="#"><img src="assets/media/thumbnail/images-03.png" alt="" /></a>
            </div>
          </div>
        </Slider>
</div>
 </div>
  );
};

export default HomeSlider;
