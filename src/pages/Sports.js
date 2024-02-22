import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Sports = () => {
  const location = useLocation();
  const { sportsLink } = location.state || {}; // Assuming sportsLink is a function
  const containerRef = useRef(null);
  console.log(sportsLink);

  useEffect(() => {
    if (sportsLink) {
      sportsLink().then((htmlContent) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = htmlContent;

          const scripts = [...containerRef.current.querySelectorAll('script')];
          scripts.forEach((originalScript) => {
            const script = document.createElement('script');
            if (originalScript.src) {
              script.src = originalScript.src;
            } else {
              script.textContent = originalScript.textContent;
            }
            originalScript.parentNode.replaceChild(script, originalScript);
          });
        }
      }).catch(error => {
        console.error('Failed to load sports content:', error);
        // Handle the error appropriately
      });
    }
  }, [sportsLink]);

  return (
    <div className='max-width game-launch'>
      <div className="container" ref={containerRef}>
        {/* Content will be injected and scripts executed here */}
      </div>
    </div>
  );
};

export default Sports;
