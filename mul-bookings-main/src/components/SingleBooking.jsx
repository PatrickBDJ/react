export default function SingleBooking({ date, room, id }) {
  return (
    <div>
      <h1>"{room}"</h1>
      <p>{date}</p>
      <button>Rediger</button>
      <button>Slet</button>
    </div>
  );
}


// id skal fetch fra firebase
// Modal til rediger med date og room