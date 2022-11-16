import { useState } from "react";

export default function BookingForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked");
    // Kald serveren og gem data
  };

  return (
    <form>
      <div>
        <label>Lokale</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          value={room}
          onChange={handleRoom}
        />
      </div>

      <div>
        <label>Dato</label>
        <input
          type="text"
          placeholder="Dato - f.eks. 15-10-2022"
          name="date"
          value={date}
          onChange={handleDate}
        />
      </div>
      <button onClick={handleSubmit}>Gem booking</button>
    </form>
  );
}
