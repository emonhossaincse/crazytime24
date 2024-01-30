import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopRatedGames = () => {
  // Configuration options for the Slick Slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
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
            <p>Top Rated Games</p>
         
        </div>
      
      {/* begin::rated_games_area */}
      <div className="rated-games">
        {/* Use the Slider component from react-slick */}
        <Slider {...sliderSettings}>
          {/* begin:item */}
          <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-01.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-02.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-03.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-04.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-05.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-06.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-07.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-08.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-09.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-10.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-11.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">BC Originals</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
      
         
        </Slider>
      </div>
      {/* end::rated_games_area */}
    </div>
    </div>
  );
};

export default TopRatedGames;
