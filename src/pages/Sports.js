import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sports = () => {
  const location = useLocation();
  const { soprtsLink } = location.state || {}; 
  console.log(soprtsLink);


  return (
    <div className='max-width game-lunch'>
      <div className="container">
            
        <iframe src='https://six6.site/game'/>
        <div dangerouslySetInnerHTML={{ __html: soprtsLink}} />
      </div>
    </div>
  );
};

export default Sports;
