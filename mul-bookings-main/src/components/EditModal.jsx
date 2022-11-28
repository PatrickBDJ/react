import Modal from "react-modal";
import {useRef} from 'react';
import { useState } from "react";
import { Check } from 'lucide-react';

function EditModal({ id, bookings, setBookings, closeModal}){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
  /*   console.log(id); */

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

    const handleEdit = async (e) => {
      /* e.preventDefault(); */
      let booking = {room: room, date: date};
      const response = await fetch(`https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/${id}/.json`,
      {
        method: 'PUT', 
        body: JSON.stringify(booking)
      })
      const result = await response.json();
      console.log(result);
/*       booking.id = result.name; */

/*       const newBookings = bookings.filter(el => el.id != id);
      setBookings(newBookings); */

      console.log(id);
  /*     closeModal(); */
    };

  

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
            <button type="button" className="select" onClick={() => {inputRef1.current.focus()}}>Vælg</button>
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
            <button type="button" className="select" onClick={() => {inputRef2.current.focus()}} >Vælg</button>
          </div>
          <br /> <br /> <br /> <br />
          <button /* type="button" */ id="save-button" onClick={handleEdit}>Gem booking</button>
        </form>
      </div>
    );
}



export default EditModal;