

export default function ConfirmDelete({id, setBookings, bookings, handleDelete, closeModal1}){

    return(
        <div>
            <div className="delete-div">
            <h1>Bekræft sletning af booking?</h1>
            <button className="delete-buttons" onClick={handleDelete}>Slet booking</button>
            <button className="delete-buttons" onClick={closeModal1}>Fortryd</button>
            </div>
        </div>
    );
}