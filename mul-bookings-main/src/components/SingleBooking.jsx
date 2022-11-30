import Modal from "react-modal";
import { useState } from "react";
import EditModal from "./EditModal";
import { Edit } from "lucide-react";
import ConfirmDelete from "./ConfirmDelete";
import RoomInfo from "./RoomInfo";

function SingleBooking({ date, room, id, setBookings, bookings }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };


  const handleDelete = async (e) => {
    const response = await fetch(`https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/${id}/.json`,
      {
        method: 'DELETE',
      });
    /*     window.location.reload(); */
    const newBookings = bookings.filter(el => el.id != id);
    setBookings(newBookings);
    closeModal1();
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
        contentLabel="Edit booking form" ariaHideApp={false}>
        <EditModal date={date} room={room} id={id} setBookings={setBookings} bookings={bookings} closeModal={closeModal} />
      </Modal>
      <div className="new-booking-buttons">
        <button onClick={openModal}>Ændre booking</button>

        <Modal
          isOpen={modalIsOpen1}
          onRequestClose={closeModal1}
          contentLabel="Confirm deletion" ariaHideApp={false} id="delete-confirmation-modal">
          <ConfirmDelete closeModal1={closeModal1} handleDelete={handleDelete} id={id} setBookings={setBookings} bookings={bookings} />
        </Modal>
        <button id="delete-button" onClick={openModal1}>Slet</button>


        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          contentLabel="Room infomation" ariaHideApp={false}>
          <RoomInfo closeModal2={closeModal2} />

        </Modal>
        <button id="room-info" onClick={openModal2} >Lokale info</button>
      </div>
    </div>
  );
}

export default SingleBooking;