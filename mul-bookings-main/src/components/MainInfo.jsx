import info from "../assets/info.svg";


function MainInfo() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
        <div className="App-div">
            <div className="overview">
                <h1>Min oversigt</h1>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Create booking form" ariaHideApp={false}>
        
                </Modal>
                <a href="#" onClick={openModal}><img src={info} alt="Info" id="info-styling" /></a>
            </div>
        </div>
    );
}

export default MainInfo;
