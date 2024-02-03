import logo from './logo.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import YourComponent from './component/modal/modal';



function App() {
  
  return (
    <div className="App">
      <Aside/>
      <Chat/>
      <TopNavMenu/>
      <HomeBigBanner/>
      <HomeSlider/>
      <Category/>
      <RecentWins/>
      <TopRatedGames/>
      <PaymentBanner/>
      <HomeTab/>
      <ExclusiveBanner/>
      <Footer/>
           
    </div>
  );
}

export default App;
