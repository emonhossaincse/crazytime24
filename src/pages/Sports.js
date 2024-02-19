import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Sports = () => {
  const location = useLocation();
  const { soprtsLink } = location.state || {}; 
  const containerRef = useRef(null); // DOM এলিমেন্টের জন্য ref

  // ডায়নামিকভাবে স্ক্রিপ্ট লোড করার জন্য ফাংশন
  const loadScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    // HTML কন্টেন্ট
    const htmlContent = `
      <div id="sport_div_iframe"></div>
    `;

    // HTML কন্টেন্ট ইনজেক্ট করা
    if (containerRef.current) {
      containerRef.current.innerHTML = htmlContent;
    }

    // স্ক্রিপ্টগুলো লোড করা
    loadScript("https://sport.seriea.fun/js/Partner/IntegrationLoader.js");
    loadScript("https://sport.seriea.fun/js/partner/bootstrapper.min.js");

    // যেকোনো ক্লিন-আপ ফাংশন যদি প্রয়োজন হয়, তাহলে এখানে যোগ করুন
    return () => {
      // Cleanup code here if needed
    };
  }, []); // খালি dependency array নিশ্চিত করে যে কোডটি কম্পোনেন্ট মাউন্ট হওয়ার পর একবার রান হবে

  return (
    <div className='max-width game-lunch'>
      <div className="container" ref={containerRef}>
        {/* এখানে HTML কন্টেন্ট ইনজেক্ট হবে */}
      </div>
    </div>
  );
};

export default Sports;
