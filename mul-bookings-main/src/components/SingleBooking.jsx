export default function SingleBooking({ date, room }) {
  return (
    <div>
      <h1>"{room}"</h1>
      <p>{date}</p>
      <button>Rediger</button>
      <button>Slet</button>
    </div>
  );
}
