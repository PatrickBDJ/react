import Modal from "react-modal";
import { useState } from "react";
import EditModal from "./EditModal";
import { Edit } from "lucide-react";

function SingleBooking({ date, room, id }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  /*   async function deleteData(id) {
      const response = await fetch(url + "/" + id + ".json", {
        method: "DELETE",
      });
      return response;
    } */

  return (
    <div>
      <div className="new-booking">
        <p>{id}</p>
        <h1>Lokale: {room}</h1>
        <p>Dato: {date}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form">
        <EditModal />
      </Modal>
      <div className="new-booking-buttons">
        <button onClick={openModal}>Ændre booking</button>
        <button id="delete-button" >Slet</button>
        <button >Lokale info</button>
      </div>
    </div>
  );
}

export default SingleBooking;