import "./App.css";
import './index.css';
import './components/css/Header.css';
import './components/css/Main-info.css';
import './components/css/Main-content.css';
import './components/css/Booking-modal.css';
import './components/css/Login.css';
import './components/css/New-booking.css';
import TheHeader from "./components/TheHeader";
import MainBackground from "./components/MainBackground";
import Main from "./components/Main";
import { useState } from "react";


/* import Name from "./Name"; */

function App() {
  const [bookings, setBookings] = useState([]);
  return (
    <div className="App">
      <TheHeader setBookings={setBookings} />
      <MainBackground />
      <Main bookings={bookings} setBookings={setBookings} />
      {/*       <MainContent bookings={bookings} setBookings={setBookings} /> */}
    </div>
  );
}

export default App;
