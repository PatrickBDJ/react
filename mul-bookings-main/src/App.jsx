import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import BookingButton from "./components/BookingButton"
/* import Name from "./Name"; */

function App() {
  return (
    <div className="App">
      <TheHeader />
      <MainContent />
      <BookingButton/>
    </div>
  );
}

export default App;
