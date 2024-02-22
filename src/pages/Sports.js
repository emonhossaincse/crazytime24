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
  // Correctly accessing sportsLink from location.state
  const { sportsLink } = location.state || {};

  useEffect(() => {
    // Check if sportsLink is provided and is a string
    if (typeof sportsLink === 'string' && sportsLink.trim() !== '') {
      fetch(sportsLink) // Use the sportsLink URL to fetch content
        .then(response => response.text())
        .then(htmlContent => {
          if (containerRef.current) {
            containerRef.current.innerHTML = htmlContent;

            const scripts = containerRef.current.querySelectorAll('script');
            const loadPromises = Array.from(scripts).map((originalScript) => {
              if (originalScript.src) {
                originalScript.parentNode.removeChild(originalScript); // Prevent double execution
                return loadScript(originalScript.src); // Load and execute external scripts
              } else {
                return Promise.resolve(null); // Inline scripts are handled later
              }
            });

            // After all external scripts are loaded, handle inline scripts
            Promise.all(loadPromises).then(() => {
              Array.from(scripts).forEach((originalScript) => {
                if (!originalScript.src) {
                  const script = document.createElement('script');
                  script.textContent = originalScript.textContent;
                  document.body.appendChild(script); // Execute inline script
                }
              });
            }).catch(error => console.error('Failed to load external scripts:', error));
          }
        })
        .catch(error => console.error('Failed to fetch content from sportsLink:', error));
    }
  }, [sportsLink]); // Depend on sportsLink to refetch if it changes

  return <div ref={containerRef}>Loading content...</div>;
};

export default Sports;
