import BookingModal from "./BookingModal.jsx";
import Modal from "react-modal";
import { useState } from "react";
import cphlogo from "../assets/cphlogo.svg";
import LogOffModal from "./LogOffModal.jsx";

function TheHeader( {setBookings} ) {
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


  return (
    <header className="App-header">
      <img src={cphlogo} alt="Logo" id="logo-styling" />
      <div className="navbar-buttons">
        <button id="overview-button"> Min oversigt</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create booking form" ariaHideApp={false}>
          <BookingModal setBookings={setBookings} />
        </Modal>
        <button onClick={openModal} id="header-room-button">Lokalebooking</button>

        <Modal
          isOpen={modalIsOpen1}
          onRequestClose={closeModal1}
          contentLabel="Log Off" ariaHideApp={false} id="log-off-modal">
          <LogOffModal />
        </Modal>
        <button id="header-logout-button" onClick={openModal1}>Log ud</button>
      </div>
    </header>
  );
}

export default TheHeader;
