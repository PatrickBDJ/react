import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import BookingButton from "./components/BookingButton"
/* import Name from "./Name"; */

function App() {
  return (
    <div className="App">
      <TheHeader />
      <BookingButton/>
      <MainContent />
    </div>
  );
}

export default App;
