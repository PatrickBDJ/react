import {useRef} from 'react';

function EditModal(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
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
              /* value={room}
              onChange={handleRoom}  */ ref={inputRef1}/>
            <button type="button" id="select" onClick={() => {inputRef1.current.focus()}}>Vælg</button>
          </div>
          <br />
          <div className="btn-group">
            <label className="label-title-styling">Dato:</label>
            <input className="input-styling"
              type="text"
              placeholder="Dato: - f.eks. 15-10-2022"
              name="date"
             /*  value={date}
              onChange={handleDate} */ ref={inputRef2}/>
            <button type="button" id="select" onClick={() => {inputRef2.current.focus()}} >Vælg</button>
          </div>
          <br /> <br /> <br /> <br />
          <button id="save-button">Gem booking</button>
        </form>
      </div>
    );
}



export default EditModal;