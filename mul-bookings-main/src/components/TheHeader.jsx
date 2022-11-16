import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import cphlogo from "../assets/cphlogo.png"

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
      <img src={cphlogo} alt="Logo" id="logo-styling" />
      <div className="navbar-buttons">
        <button id="overview-button"> Min oversigt</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create booking form"
        >
          <BookingForm />
        </Modal>
        <button onClick={openModal}>Lokalebooking</button>
        <button>Log ud</button>
      </div>
    </header>
  );
}

export default TheHeader;
