import "./App.css";
import './index.css';
import './components/css/Header.css';
import './components/css/Main-info.css';
import './components/css/Main-overview.css';
import './components/css/Booking-modal.css';
import './components/css/New-booking.css';
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import MainInfo from "./components/MainInfo";
import Main from "./components/Main";
import { useState } from "react";


/* import Name from "./Name"; */

function App() {
  const [bookings, setBookings] = useState([]);
  return (
    <div className="App">
      <TheHeader setBookings={setBookings} />
      <MainInfo />
      <Main bookings={bookings}/>
      <MainContent bookings={bookings} setBookings={setBookings} />
    </div>
  );
}

export default App;
