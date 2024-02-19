import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sports = () => {
  const location = useLocation();
  const { soprtsLink } = location.state || {}; 
  console.log(soprtsLink);



  return (
    <div className='max-width game-lunch'>
      <div className="container">
            {soprtsLink}
      </div>
    </div>
  );
};

export default Sports;
