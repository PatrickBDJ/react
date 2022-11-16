import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";

function BookingButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App-div">
      <div className="overview">
        <h1>Min oversigt</h1>
        <div className="overview-text">
          <h3>Zainab Waleed Abbas</h3>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <BookingForm />
      </Modal>
      <button onClick={openModal} id="booking-button">Ny booking</button>
          <h3>Mine bookinger</h3>
          <p>Du har ingen eksisterende bookinger i øjeblikket. (Erstattes med Firebase oversigt)</p>
        </div>
      </div>
    </div>
  );
}

export default BookingButton;
