import calender from "../assets/calender.svg";

export default function RoomInfo({ date, room, kvm, seating, projector, blackboard }) {
    /*     console.log(projector); */
    return (
        <div className="Room-info">
            <div>
                <img src={calender} alt="calender" id="calender" />
            </div>
            <div className="room-info-text">
                <h1>{room}</h1>
                <h3>{date}</h3>
                <p>Lokaletype: Undervisningslokale</p>
                <p>Kvadratmeter: {kvm}</p>
                <p>Siddepladser: {seating}</p>
                <p>Projektor: {projector == true ? "Ja" : "Nej"}</p>
                <p>Tavle: {blackboard == true ? "Ja" : "Nej"}</p>
            </div>
        </div>
    );
}