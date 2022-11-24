import {useRef} from 'react';
import { useState } from "react";
import { Check } from 'lucide-react';


function EditModal( id, bookings, setBookings){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

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

    const handleDelete = async (e) => {
      const response = await fetch(`https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/${id}/.json`,
      {
        method: 'PUT', 
      })
      const newBookings = bookings.filter(el => el.id != id);
      setBookings(newBookings);
    };

    console.log(id);

    return(
        <div className="form-div">
        <h2>Ændring af booking</h2>
        <form id="booking-modal">
          <div className="btn-group">
            <label className="label-title-styling">Lokale:</label>
            <input className="input-styling"
              type="text"
              placeholder="Lokale nummer:"
              name="room"
              value={room}
              onChange={handleRoom}  ref={inputRef1}/>
            <button type="button" id="select" onClick={() => {inputRef1.current.focus()}}>Vælg</button>
          </div>
          <br />
          <div className="btn-group">
            <label className="label-title-styling">Dato:</label>
            <input className="input-styling"
              type="text"
              placeholder="Dato: - f.eks. 15-10-2022"
              name="date"
              value={date}
              onChange={handleDate} ref={inputRef2}/>
            <button type="button" id="select" onClick={() => {inputRef2.current.focus()}} >Vælg</button>
          </div>
          <br /> <br /> <br /> <br />
          <button type="button" id="save-button" onClick={handleDelete}>Gem booking</button>
        </form>
      </div>
    );
}



export default EditModal;