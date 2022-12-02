import Modal from "react-modal";
import {useRef} from 'react';
import { useState } from "react";
import { Check } from 'lucide-react';

function EditModal({ id }){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
  /*   console.log(id); */

    const [kvm, setKvm] = useState("");
    const [seating, setSeating] = useState("");
    const [blackboard, setBlackboard] = useState(false);
    const [projector, setProjector] = useState(false);

    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
  
    const handleRoom = (event) => {
      const input = event.target.value;
      setRoom(input);
    };
    const handleDate = (event) => {
      setDate(event.target.value);
    };

    const handleEdit = async (e) => {
      /* e.preventDefault(); */
      let booking = {room: room, date: date, kvm: kvm, seating: seating, blackboard: blackboard, projector: projector};
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
      <br />
      <form id="booking-modal">
        <div className="btn-group">
          <label className="label-title-styling">Lokaletype:</label>
          <button id="inactive-roomtype">Mødelokaler</button>
          <button id="active-roomtype">Undervisningslokaler</button>
        </div>
        <br />
        <div className="btn-group">
          <label className="label-title-styling">Lokale:</label>
          <input className="input-styling"
            type="text"
            placeholder="Lokale nummer:"
            name="room"
            value={room}
            onChange={handleRoom} ref={inputRef1}/>
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
          <button type="button" className="select" onClick={() => {inputRef2.current.focus()}}>Vælg</button>
        </div>
        <br /> <br /> <br /> <br />
        <div>
          <label id="room-attribute-title">Lokalets egenskaber</label>
          <br /> <br />
          
          <label htmlFor="kvm">Kvadratmeter: </label>
          <input type="number" name="kvm" id="kvm-input" placeholder="Indtast antal kvadratmeter:
          " value={kvm} onChange={(event) => setKvm(event.target.value)}/> 
          <br />
          <label htmlFor="seating">Siddepladser: </label>
          <input type="number" name="seating" id="seating-input" placeholder="Indtast antal siddepladser:
          " value={seating} onChange={(event) => setSeating(event.target.value)}/>
          <br />
          <label htmlFor="projector">
          Projekter:
          <input type="checkbox" name="projector" id="projector-input" checked={projector} onChange={(event) => setProjector(event.target.checked)} />
          </label>
          <label>
          Tavle:
          <input type="checkbox" name="blackboard" id="blackboard-input" checked={blackboard} onChange={(event) => setBlackboard(event.target.checked)} />
          </label>

          {/* <button type="button" className="room-attributes room-attributes-inactive">32 kvm</button> */}
          {/* <button type="button" className="room-attributes room-attributes-active">24 siddepladser</button> */}
          {/* <button type="button" className="room-attributes room-attributes-inactive">Projektor: <Check size={18} /></button>
          <button type="button" className="room-attributes room-attributes-active">Tavle: <Check size={18} /></button> */}
        </div>
        <button onClick={handleEdit} id="save-button">Ændre booking</button>
      </form>
    </div>
    );
}



export default EditModal;