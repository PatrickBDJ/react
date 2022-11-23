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
      <p>{id}</p>
      <h1>"{room}"</h1>
      <p>{date}</p>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create booking form">
      <EditModal/>
      </Modal>
      <button onClick={openModal}>Rediger</button>
      <button >Slet</button>
    </div>
  );
}

export default SingleBooking;