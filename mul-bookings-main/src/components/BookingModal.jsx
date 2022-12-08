import { useState } from "react";
import { useRef } from 'react';


export default function BookingModal({ setBookings }) {
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");

  const [kvm, setKvm] = useState("");
  const [seating, setSeating] = useState("");
  const [blackboard, setBlackboard] = useState(false);
  const [projector, setProjector] = useState(false);



  const handleRoom = (event) => {
    const input = event.target.value;
    setRoom(input);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    /* e.preventDefault(); */
    /*    console.log("You clicked"); */
    let booking = { room, date, kvm, seating, blackboard, projector };
    const response = await fetch('https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/.json',
      {
        method: 'POST',
        body: JSON.stringify(booking)
      });
    const result = await response.json();
    console.log(result);
    booking.id = result.name;
    setBookings((previousValue) => {
      return [...previousValue, booking];
    });
  };

  return (
    <div className="form-div">
      <h1>Foretag ny booking</h1>
      <form id="booking-modal">
        <div className="btn-group">
          <label className="label-title-styling" id="label-title-styling-1">Lokaletype:</label>
          <button type="button" id="active-roomtype">Undervisningslokale</button>
        </div>
        <div className="btn-group">
          <label className="label-title-styling" id="label-title-styling-2">Lokale:</label>
          <input className="input-styling"
            type="number"
            placeholder="Lokale nummer"
            name="room"
            value={room}
            onChange={handleRoom} ref={inputRef3} />
          <button type="button" className="select" onClick={() => { inputRef3.current.focus(); }}>Vælg</button>
        </div>
        <div className="btn-group" id="last-btn-group">
          <label className="label-title-styling" id="label-title-styling-3">Dato:</label>
          <input className="input-styling"
            type="date"
            placeholder="Dato: - f.eks. 15-10-2022"
            name="date"
            value={date}
            onChange={handleDate} ref={inputRef4} />
          <button type="button" className="select" onClick={() => { inputRef4.current.focus(); }}>Vælg</button>
        </div>

        <div className="room-attribute">
          <label className="room-attribute-title">Lokalets egenskaber</label>
          <div className="room-attribute-labels" >
            <label htmlFor="kvm">Kvadratmeter: </label>
            <input type="number" name="kvm" id="kvm-input" placeholder="Indtast antal kvadratmeter
            " value={kvm} onChange={(event) => setKvm(event.target.value)} />
          </div>
          <div className="room-attribute-labels" >
            <label className="room-attribute-labels" htmlFor="seating">Siddepladser: </label>
            <input type="number" name="seating" id="seating-input" placeholder="Indtast antal siddepladser
            " value={seating} onChange={(event) => setSeating(event.target.value)} />
          </div>
          <div className="room-attribute-labels-checkbox room-attribute-checkbox" >
            <label className="room-attribute-labels" htmlFor="blackboard">
              Tavle:
              <input type="checkbox" name="blackboard" id="blackboard-input" checked={blackboard} onChange={(event) => setBlackboard(event.target.checked)} />
            </label>
          </div>
          <div className="room-attribute-labels-checkbox room-attribute-checkbox" >
            <label className="room-attribute-labels" htmlFor="projector">
              Projekter:
              <input type="checkbox" name="projector" id="projector-input" checked={projector} onChange={(event) => setProjector(event.target.checked)} />
            </label>
          </div>


          {/* <button type="button" className="room-attributes room-attributes-inactive">32 kvm</button> */}
          {/* <button type="button" className="room-attributes room-attributes-active">24 siddepladser</button> */}
          {/* <button type="button" className="room-attributes room-attributes-inactive">Projektor: <Check size={18} /></button>
          <button type="button" className="room-attributes room-attributes-active">Tavle: <Check size={18} /></button> */}
        </div>
        <button onClick={handleSubmit} id="save-button">Gem booking</button>
      </form>
    </div>
  );
}
