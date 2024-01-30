import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from './component/nav/Aside';
import TopNavMenu from './component/nav/TopNavMenu';
import Chat from './component/sidebar/Chat';
import HomeBigBanner from './component/banner/HomeBigBanner';
import HomeSlider from './component/slider/HomeSlider';
import RecentWins from './component/slider/RecentWins';
import TopRatedGames from './component/slider/TopRatedGames';
import PaymentBanner from './component/banner/PaymentBanner';



function App() {
  return (
    <div className="App">
      <Aside/>
      <Chat/>
      <TopNavMenu/>
      <HomeBigBanner/>
      <HomeSlider/>
      <RecentWins/>
      <TopRatedGames/>
      <PaymentBanner/>
      
    </div>
  );
}

export default App;
