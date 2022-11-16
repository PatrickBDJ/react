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
