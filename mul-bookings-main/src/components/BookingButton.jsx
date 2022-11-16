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
      <h1>Min oversigt</h1>
      <h3>Zainab Waleed Abbas</h3>
      <h3>Mine bookinger</h3>
      <p>Du har ingen eksisterende bookinger i øjeblikket.</p>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <BookingForm />
      </Modal>
      <button onClick={openModal}>Ny booking</button>
    </div>
  );
}

export default BookingButton;
