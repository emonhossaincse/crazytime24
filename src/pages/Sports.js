import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Function to load an external script and return a Promise that resolves when the script is loaded
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = (error) => reject(new Error(`Script load error for ${src}: ${error.message}`));
    document.body.appendChild(script);
  });
};

const Sports = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { soprtsLink } = location.state || {}; 


  console.log(soprtsLink);

  useEffect(() => {
    // Ensure sportsLink is defined and is a string URL
    if (typeof soprtsLink === 'string' && soprtsLink !== '') {
      fetch(soprtsLink) // Fetch the content from the sportsLink URL
        .then(response => response.text())
        .then(htmlContent => {
          if (containerRef.current) {
            containerRef.current.innerHTML = htmlContent;

            const scripts = containerRef.current.querySelectorAll('script');
            const loadPromises = Array.from(scripts).map((originalScript) => {
              if (originalScript.src) {
                // Remove the original script element to prevent double execution
                originalScript.parentNode.removeChild(originalScript);
                // Return a promise that resolves when the external script is loaded
                return loadScript(originalScript.src);
              } else {
                // For inline scripts, return null (to be handled after external scripts are loaded)
                return Promise.resolve(null);
              }
            });

            // Wait for all external scripts to load before executing inline scripts
            Promise.all(loadPromises).then(() => {
              // Re-add and execute inline scripts
              Array.from(scripts).forEach((originalScript) => {
                if (!originalScript.src) {
                  const script = document.createElement('script');
                  script.textContent = originalScript.textContent;
                  document.body.appendChild(script);
                  // Inline script executed here
                }
              });
            }).catch(error => console.error('Failed to load external scripts:', error));
          }
        })
        .catch(error => console.error('Failed to fetch content:', error));
    }
  }, [soprtsLink]); // Dependency on sportsLink to re-run if it changes

  return <div ref={containerRef}>Loading content...</div>;
};

export default Sports;
