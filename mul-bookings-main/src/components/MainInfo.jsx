import info from "../assets/info.svg";


function MainInfo() {

    return (
        <div className="App-div">
            <div className="overview">
                <h1>Min oversigt</h1>
                <a href=""><img src={info} alt="Info" id="info-styling" /></a>
                
                <img src={(info)} alt="Info" id="info-styling" />
            </div>
        </div>
    );
}

export default MainInfo;
