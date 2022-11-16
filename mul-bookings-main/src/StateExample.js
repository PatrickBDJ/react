import "./App.css";
import { useState } from "react";
import { Smile } from "lucide-react";

function StateExample(props) {
  //        get    set      =          startværdi
  const [happy, setHappy] = useState(true);

  const switchHappy = () => {
    setHappy(!happy);
  };

  return (
    <div>
      <p>
        Mood: {happy ? <Smile color={props.primaryColor} size={48} /> : "😔"}
      </p>
      <button onClick={switchHappy}>Switch happy</button>
    </div>
  );
}

export default StateExample;
