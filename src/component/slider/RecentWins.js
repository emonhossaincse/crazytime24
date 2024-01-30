import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const RecentWins = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-width'>
      <div className="container">
          <div className="title">
            <p>Recent Big Wins</p>
        </div>
      
      {/* begin::big_wins_area */}
      
        <Slider {...settings}>
         {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-01.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-02.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
         {/* beign::item */}
         <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-03.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
         {/* beign::item */}
         <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-04.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-05.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-06.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-07.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
         {/* beign::item */}
         <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-01.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-02.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
          {/* beign::item */}
          <div className="col-lg-12">
            <div className="recent-win">
              <div className="recent-thumnail">
                <a href="#"><img src="/assets/media/thumbnail/big-image-03.png" alt="" /></a>
              </div>
              <div className="recent-content">
                <a href="#">Mkgilohunyb</a>
                <span>$ 6,163.49</span>
              </div>
            </div>
          </div>
         {/* end::item */}
         
         
          
        
        </Slider>
        </div>
    </div>
  );
};

export default RecentWins;
