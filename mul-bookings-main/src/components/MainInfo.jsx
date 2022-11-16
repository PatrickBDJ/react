import info from "../assets/info.svg";


function MainInfo() {

    return (
        <div className="App-div">
            <div className="overview">
                <img src={info} alt="Logo" id="info-styling" />
                <h1>Min oversigt</h1>
            </div>
        </div>
    );
}

export default MainInfo;