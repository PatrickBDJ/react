import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import profil from "../assets/profil.svg";
import calender from "../assets/calender.svg";

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
      <div className="overview-text">
        <div className="profil">
          <img src={profil} alt="Profil" className="profil-styling" />
          <h3>Zainab Waleed Abbas</h3>
        </div>
        <div className="my-bookings">
          <img src={calender} alt="Kalender" className="profil-styling" />
          <h3>Mine bookinger</h3>
        </div>
        <p>Du har ingen eksisterende bookinger i øjeblikket. (Erstattes med Firebase oversigt)</p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create booking form">
          <BookingForm />
        </Modal>
        <button onClick={openModal} id="booking-button">Ny booking</button>
      </div>
    </div>
  );
}

export default BookingButton;
