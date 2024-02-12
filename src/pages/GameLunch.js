import React from 'react';
import { useLocation } from 'react-router-dom';

const GameLunch = () => {
  const location = useLocation();
  const { iframeUrl } = location.state || {}; // Retrieve iframeUrl passed through state

  return (

    <div className='max-width game-lunch'>
    <div className="container">
    {iframeUrl ? (
        // Apply 100vh height directly to the iframe
        <iframe 
          title="Game"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          src={iframeUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No game URL provided</p>
      )}
        </div>
        </div>
   
  );
};

export default GameLunch;
