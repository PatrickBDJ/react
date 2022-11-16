import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";
import SingleBooking from "./SingleBooking";

const url =
  "https://mul-3rd-sem-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";

export default function MainContent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
      console.log(asArray);
      setBookings(asArray);
    }

    getData();
  }, []);

  return (
    <main>
      {bookings.map((booking) => {
        return <SingleBooking date={booking.date} room={booking.room} />;
      })}
    </main>
  );
}
