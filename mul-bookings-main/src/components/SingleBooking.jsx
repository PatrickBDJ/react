import Modal from "react-modal";
import { useState } from "react";
import EditModal from "./EditModal";
import { Edit } from "lucide-react";

function SingleBooking({ date, room, id, setBookings, bookings }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const handleDelete = async (e) => {
    const response = await fetch(`https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/${id}/.json`,
    {
      method: 'DELETE', 
    })
    const newBookings = bookings.filter(el => el.id != id);
    setBookings(newBookings);
  };

  return (
    <div>
      <div className="new-booking">
        <h1>Lokale: {room}</h1>
        <p>Dato: {date}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form" ariaHideApp={false}>
        <EditModal date={date} room={room} id={id} setBookings={setBookings} bookings={bookings} closeModal={closeModal}/>
      </Modal>
      <div className="new-booking-buttons">
        <button onClick={openModal}>Ændre booking</button>
        <button id="delete-button" onClick={handleDelete}>Slet</button>
        <button >Lokale info</button>
      </div>
    </div>
  );
}

export default SingleBooking;