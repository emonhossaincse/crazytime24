import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/profile.css';
import './assets/css/main.css';
import './assets/css/defult.css';
import './assets/css/footer.css';
import './assets/css/modal.css';
import './assets/css/singup.css';
import './assets/css/vipclub.css';
import './assets/css/affiliate.css';
import './assets/css/Casino.css';
import './assets/css/common.css';
import './assets/css/CasinoFooter.css';
import './assets/css/casinoFooterCss.css';
import Aside from './component/nav/Aside';
import TopNavMenu from './component/nav/TopNavMenu';
import Chat from './component/sidebar/Chat';
import HomeBigBanner from './component/banner/HomeBigBanner';
import HomeSlider from './component/slider/HomeSlider';
import Footer from './layout/Footer';
import Category from './layout/Category';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GameLunch from './pages/GameLunch';
import Wallet from './component/sidebar/Wallet';
import BottomNavMenu from './component/nav/BottomNavMenu';
import Sports from './pages/Sports';
import Affiliate from './pages/Affiliate';
import OddsList from './layout/OddsList';
import Casino from './pages/Casino';
import Bank from './pages/account/Bank';
import Message from './pages/account/Message';
import Profile from './pages/account/Account';
import Gambling from './pages/account/Gambling';
import Activity from './pages/account/Acivity';
import History from './pages/account/History';
import Banking from './pages/account/PaymentMethod';
import TermsCondition from './pages/account/TermsCondition';
import CookiePolicy from './pages/account/CookiePolicy';
import Complaints from './pages/account/Complaints';
import ContactUs from './pages/account/ContactUs';
import PrivacyPolicy from './pages/account/PrivacyPolicy';
import FairPayouts from './pages/account/FairPayouts';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Aside only if the current route is not '/sports' */}
      {location.pathname !== '/sports'  }
      <Aside />
      <Chat />
      <TopNavMenu />
      <BottomNavMenu />
      <Wallet />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBigBanner />
              <HomeSlider />
              <Category />
              <OddsList />
              <Footer />
            </>
          }
        />
        <Route path="/gamerun" element={<GameLunch />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/account/bank" element={<Bank />} />
        <Route path="/account/message" element={<Message />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/gambling" element={<Gambling />} />
        <Route path="/account/activity" element={<Activity />} />
        <Route path="/account/history" element={<History />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/termsConditions" element={<TermsCondition />} />
        <Route path="/cookiePolicy" element={<CookiePolicy />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/fairPayouts" element={<FairPayouts />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
