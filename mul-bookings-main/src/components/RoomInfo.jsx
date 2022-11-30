export default function RoomInfo({ date, room }) {
    return (
        <div className="room-info-text">
            <h1>{room}</h1>
            <h3>{date}</h3>
            <p>Lokaletype: Undervisningslokale</p>
            <p>Størrelse: 32 kvm</p>
            <p>Siddepladser: 20</p>
            <p>Projekter: Ja</p>
            <p>Tavle: Ja</p>

        </div>
    );
}