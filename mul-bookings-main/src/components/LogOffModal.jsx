import cphlogowhite from "../assets/cphlogowhite.svg";

function refreshPage() {
    window.location.reload();
}

export default function LogOffModal() {

    return (
        <div>
            <div className="logo-login">
                <img src={cphlogowhite} alt="Logo" id="login-styling" />
                {/* <h1>Lokalebookning</h1> */}
            </div>
            <div id="log-off-text">
                <h2>Du er nu logget ud</h2>
                <button onClick={refreshPage} id="login-button">Log ind igen</button>
            </div>
        </div>
    );
}