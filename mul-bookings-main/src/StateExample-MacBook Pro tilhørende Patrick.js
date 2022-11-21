import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Smile, Frown } from "lucide-react";

function StateExample() {
  //        get    set      =          startværdi
  const [happy, setHappy] = useState(true);

  const switchHappy = () => {
    setHappy(!happy);
  };

  return (
    <div>
      <p>Mood: {happy ? <Smile color="green" size={48}/> : <Frown color="red" size={48} />}</p>
      <button onClick={switchHappy}>Switch happy</button>
    </div>
  );
}

export default StateExample;
