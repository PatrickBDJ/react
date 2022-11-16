import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";

function TheHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className="App-header">
      <button>Min oversigt</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <BookingForm />
      </Modal>
      <button onClick={openModal}>Lokalebooking</button>
      <button>Log ud</button>
    </header>
  );
}

export default TheHeader;
