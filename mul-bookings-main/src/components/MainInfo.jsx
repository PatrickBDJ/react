import info from "../assets/info.svg";

function MainInfo() {

    return (
        <div className="App-div">
            <div className="overview">
                <h1>Min oversigt</h1>
                <img src={info} alt="Logo" id="info-styling" />
            </div>
        </div>
    );
}

export default MainInfo;