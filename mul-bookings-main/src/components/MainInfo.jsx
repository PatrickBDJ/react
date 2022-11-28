import info from "../assets/info.svg";
import Modal from "react-modal";
import { useState } from "react";
import MainInfoModal from "./MainInfoModal";


function MainInfo() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

/*     const modalStyling = {
        content: {
            width: '50%',
        }
    }; */

    return (
        <div className="App-div">
            <div className="overview">
                <h1>Min oversigt</h1>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Information modal" ariaHideApp={false} /* style={modalStyling} */ id="info-modal-style">
                <MainInfoModal></MainInfoModal>
                </Modal>
                <a href="#" onClick={openModal}><img src={info} alt="Info" id="info-styling" /></a>
            </div>
        </div>
    );
}

export default MainInfo;
