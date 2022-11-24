import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";
import SingleBooking from "./SingleBooking";
import Spinner from "./atoms/Spinner";

const url =
  'https://react-intro-a3485-default-rtdb.europe-west1.firebasedatabase.app/.json';

export default function MainContent({bookings, setBookings}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // TODO: Nu begynder loading
    // Tristate er opnået ved loading, error og data (succes).
    setIsLoading(true);

    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      if (response.status == 200){
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
 /*      console.log(asArray); */
      setBookings(asArray);
    } else{
      setIsError(true);
    };
      // TODO: Nu stopper loading
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <main>
      {isLoading && <Spinner/>}
      {isError && <p> Der er sket en uventet fejl, prøv igen senere,</p>}
      {bookings.map((booking) => {
        return <SingleBooking date={booking.date} room={booking.room} id={booking.id} setBookings={setBookings} bookings={bookings}/>;
      })}
    </main>
  );
}
