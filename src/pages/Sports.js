import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Sports = () => {
  const location = useLocation();
  const { sportsLink } = location.state || {};
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sportsLink || !containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = sportsLink;

    // Find and execute scripts (both inline and external)
    const scripts = [...containerRef.current.getElementsByTagName("script")];
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      
      // For inline scripts
      if (!oldScript.src) {
        newScript.textContent = oldScript.textContent;
      }

      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

  }, [sportsLink]);

  return (
    <div className='max-width game-lunch'>
      <div className="container" ref={containerRef}>
        {/* Content and scripts injected here */}
      </div>
    </div>
  );
};

export default Sports;
