import info from "../assets/info.svg";
import Modal from "react-modal";
import { useState } from "react";
import InfoModal from "./InfoModal";


function MainBackground() {
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
                <h1 className="title">Min oversigt</h1>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Information modal" ariaHideApp={false} /* style={modalStyling} */ id="info-modal-style">
                    <InfoModal />
                </Modal>
                <a href="#" onClick={openModal}><img src={info} alt="Info" id="info-styling" /></a>
            </div>
        </div>
    );
}

export default MainBackground;
