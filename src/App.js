import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from './component/nav/Aside';
import TopNavMenu from './component/nav/TopNavMenu';
import Chat from './component/sidebar/Chat';


function App() {
  return (
    <div className="App">
      <Aside/>
      <Chat/>
      <TopNavMenu/>
      
    </div>
  );
}

export default App;
