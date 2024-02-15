import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/main.css';
import './assets/css/defult.css';
import './assets/css/footer.css';
import './assets/css/modal.css';
import './assets/css/singup.css';
import Aside from './component/nav/Aside';
import TopNavMenu from './component/nav/TopNavMenu';
import Chat from './component/sidebar/Chat';
import HomeBigBanner from './component/banner/HomeBigBanner';
import HomeSlider from './component/slider/HomeSlider';
import RecentWins from './component/slider/RecentWins';
import TopRatedGames from './component/slider/TopRatedGames';
import PaymentBanner from './component/banner/PaymentBanner';
import HomeTab from './component/tabbar/HomeTab';
import ExclusiveBanner from './component/banner/ExclusiveBanner';
import Footer from './layout/Footer';
import Category from './layout/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameLunch from './pages/GameLunch';
import Wallet from './component/sidebar/Wallet';

function App() {
  

  return (
    <div className="App">
      <Router>
     
        <Aside/>
        <Chat/>
        <TopNavMenu/>
        <Wallet/>
        <Routes>
          <Route path="/" element={<>
            <HomeBigBanner/>
            <HomeSlider/>
             <Category/>
            <RecentWins/>
            <TopRatedGames/>
            <PaymentBanner/>
            <HomeTab/>
            <ExclusiveBanner/>
            <Footer/>
          </>} />
          <Route path="/game" element={<GameLunch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
