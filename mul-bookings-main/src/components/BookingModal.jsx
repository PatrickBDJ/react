import { useState } from "react";
import { Check } from 'lucide-react';

export default function BookingModal( {setBookings}) {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState(""); // date

  const handleRoom = (event) => {
    const input = event.target.value;
    setRoom(input);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("You clicked");
    let booking = {room: room, date: date};
    const response = await fetch('https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/.json',
    {
      method: 'POST', 
      body: JSON.stringify(booking)
    })
    const result = await response.json();
    console.log(result);
    booking.id = result.name;
    setBookings((previousValue) =>{
      return[...previousValue, booking ]
    });
  };

  return (
    <div className="form-div">
      <h2>Foretag ny booking</h2>
      <br />
      <form id="booking-modal">
        <div class="btn-group">
          <label class="label-title-styling">Lokaletype:</label>
          <button id="inactive-roomtype">Mødelokaler</button>
          <button id="active-roomtype">Undervisningslokaler</button>
        </div>
        <br />
        <div class="btn-group">
          <label class="label-title-styling">Lokale:</label>
          <input class="input-styling"
            type="text"
            placeholder="Lokale nummer:"
            name="room"
            value={room}
            onChange={handleRoom} />
          <button id="select">Vælg</button>
        </div>
        <br />
        <div class="btn-group">
          <label class="label-title-styling">Dato:</label>
          <input class="input-styling"
            type="text"
            placeholder="Dato: - f.eks. 15-10-2022"
            name="date"
            value={date}
            onChange={handleDate} />
          <button id="select">Vælg</button>
        </div>
        <br /> <br /> <br /> <br />
        <div>
          <label id="room-attribute-title">Lokalets egenskaber</label>
          <br /> <br />
          <button class="room-attributes room-attributes-inactive">32 kvm</button>
          <button class="room-attributes room-attributes-active">24 sidderpladser</button>
          <button class="room-attributes room-attributes-inactive">Projektor: <Check size={18} /></button>
          <button class="room-attributes room-attributes-active">Tavle: <Check size={18} /></button>
        </div>
        <button onClick={handleSubmit} id="save-button">Gem booking</button>
      </form>
    </div>
  );
}
