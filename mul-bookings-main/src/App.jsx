import "./App.css";
import './index.css';
import './components/css/Header.css';
import './components/css/Main-info.css';
import './components/css/Main-overview.css';
import './components/css/Booking-modal.css';
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import MainInfo from "./components/MainInfo";
import Main from "./components/Main";


/* import Name from "./Name"; */

function App() {
  return (
    <div className="App">
      <TheHeader />
      <MainInfo />
      <Main />
      <MainContent />
    </div>
  );
}

export default App;
