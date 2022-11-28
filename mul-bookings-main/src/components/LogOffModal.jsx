

function refreshPage(){
    window.location.reload();
} 

export default function LogOffModal(){

    return(
        <div id="log-off-text">
            <h2>Du er nu logget ud.</h2>
            <button onClick={refreshPage}id="login-button">Log ind igen?</button>
        </div>
    );
}