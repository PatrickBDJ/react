import BookingModal from "./BookingModal.jsx";
import Modal from "react-modal";
import { useState } from "react";
import profil from "../assets/profil.svg";
import calender from "../assets/calender.svg";

function Main({bookings}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

/*   const ifEmpty = () => {
    if(bookings.length >= 0){
      return(true);
    } else{
      return(false);
    }
  }; */

  return (
/*     <div>{ifEmpty ? */
    <div className="App-div">
      <div className="overview-text">
        <div className="profil">
          <img src={profil} alt="Profil" className="profil-styling" />
          <h3>Zainab Waleed Abbas</h3>
        </div>
        <div className="my-bookings">
          <img src={calender} alt="Kalender" className="calender-styling" />
          <h3>Mine bookinger</h3>
        </div>
        <p id="no-bookings-text">Se bookinger længere nede på siden:</p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create booking form" ariaHideApp={false}>
          <BookingModal />
        </Modal>
        <button onClick={openModal} id="booking-button"> Ny booking</button>
      </div>
    </div>
 /*    : <div><h3>Hej</h3></div>}</div> */
  );
}

export default Main;
