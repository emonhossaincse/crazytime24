import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const TopRatedGames = () => {

  const [selectedGame, setSelectedGame] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(null);
  const navigate = useNavigate();
  
  
  

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

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleGameClick = async (gameId) => {
    try {
      // Fetch the game details from the Laravel backend
      const response = await fetch('https://six6.site/api/get-game-direct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // Include your authentication token if required
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          game_id: gameId,
          lang: 'en', // Replace with the desired language
          play_for_fun: false, // Replace with the desired play_for_fun value
          home_url: 'https://six6.site/', // Replace with your actual home URL
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/game', { state: { iframeUrl: data.response.response.url } });


      } else {
        setError(data.message || 'An unexpected error occurred');
      }
    } catch (error) {
      console.error('Error fetching game details:', error);
      setError('An unexpected error occurred');
    }
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
            <div  onClick={() => handleGameClick(120179)} className="rated-game">
              <div  className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/es/jpg/es-crazy-time-mobile.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Crazy Time Cheking</a>
                
                 <button onClick={handleModalOpen} className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(115287)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/es/jpg/es-crazy-time.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Crazy Time 2</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(153791)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/es/jpg/es-crazy-time-a.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Crazy Time A</a>
                 <button className='btn blue-btn'>Play Now</button>
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(157966)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/gs/jpg/gs-yellow-diver.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Yellow Diver</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(109799)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/ha/jpg/ha-hot-hot-halloween.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Hot Hot Halloween</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(112229)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="https://stage.game-program.com/media/images/slots/square/p0/jpg/p0-sweet-bonanza.jpg" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Sweet Bonanza</a>
                
                 <button className='btn blue-btn'>Play Now</button>
                
              </div>
            </div>
          </div>
          {/* end::item */}
           {/* begin:item */}
           <div className="col-lg-12">
            <div onClick={() => handleGameClick(130043)} className="rated-game">
              <div className="rated-game-thumbnail">
                <img src="assets/media/thumbnail/game-07.png" alt="" />
              </div>
              <div className="rated-content">
               <a href="#">Mega Wheel</a>
                
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
