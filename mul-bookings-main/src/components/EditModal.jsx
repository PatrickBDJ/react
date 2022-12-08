import { useRef } from 'react';
import { useState } from "react";

function EditModal({ id }) {
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
    let booking = { room: room, date: date, kvm: kvm, seating: seating, blackboard: blackboard, projector: projector };
    const response = await fetch(`https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/${id}/.json`,
      {
        method: 'PUT',
        body: JSON.stringify(booking)
      });
    const result = await response.json();
    console.log(result);
    /*       booking.id = result.name; */

    /*       const newBookings = bookings.filter(el => el.id != id);
          setBookings(newBookings); */

    console.log(id);
    /*     closeModal(); */
  };



  return (
    <div className="form-div">
      <h1>Ændring af booking</h1>
      <form id="booking-modal">
        <div className="btn-group">
          <label className="label-title-styling" id="label-title-styling-1">Lokaletype:</label>
          <button type="button" id="active-roomtype">Undervisningslokaler</button>
        </div>
        <div className="btn-group">
          <label className="label-title-styling" id="label-title-styling-2">Lokale:</label>
          <input className="input-styling"
            type="number"
            placeholder="Lokale nummer:"
            name="room"
            value={room}
            onChange={handleRoom} ref={inputRef1} />
          <button type="button" className="select" onClick={() => { inputRef1.current.focus(); }}>Vælg</button>
        </div>

        <div className="btn-group" id="last-btn-group">
          <label className="label-title-styling" id="label-title-styling-3">Dato:</label>
          <input className="input-styling"
            type="date"
            placeholder="Dato: - f.eks. 15-10-2022"
            name="date"
            value={date}
            onChange={handleDate} ref={inputRef2} />
          <button type="button" className="select" onClick={() => { inputRef2.current.focus(); }}>Vælg</button>
        </div>

        <div className="room-attribute">
          <label className="room-attribute-title">Lokalets egenskaber</label>

          <div className="room-attribute-labels" >
            <label htmlFor="kvm">Kvadratmeter: </label>
            <input type="number" name="kvm" id="kvm-input" placeholder="Indtast antal kvadratmeter:
            " value={kvm} onChange={(event) => setKvm(event.target.value)} />
          </div>

          <div className="room-attribute-labels" >
            <label className="room-attribute-labels" htmlFor="seating">Siddepladser: </label>
            <input type="number" name="seating" id="seating-input" placeholder="Indtast antal siddepladser:
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
        <button onClick={handleEdit} id="save-button">Ændre booking</button>
      </form>
    </div>
  );
}



export default EditModal;