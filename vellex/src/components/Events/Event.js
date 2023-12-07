import image from "../../assets/images/bagnoles-orne-tour-normandie-course-cyclisme-competition-regionale-nationale-velo-peloton-cyclistes-2018-1920x960.jpg";
import styles from "./Event.module.css";
import { Link } from "react-router-dom";

function Event({
  id,
  name,
  eventType,
  description,
  startDate,
  endDate,
  address,
  city,
  country,
}) {
  function FormatDateticketEvent(date) {
    const originalDate = new Date(date);

    const options = { month: "short", day: "numeric" };

    const formattedDate = originalDate.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  return (
    <div className={`mt-4 text-center ${styles.event}`}>
      <div className={styles.date}>
        <strong>{FormatDateticketEvent(startDate)} </strong>
      </div>

      <div className="image">
        <img className={styles.event_img} alt="event-img" src={image}></img>
      </div>
      <div className="p-2">
        <strong>
          {eventType} : {name}
        </strong>
        <p>{description.slice(0, 200)}</p>
        <p>
          <strong>Terminée</strong>
        </p>
        <div className="text-center">
          <Link
            to="/detailEvent"
            state={{
              id: id,
              name: name,
              eventType: eventType,
              description: description,
              startDate: startDate,
              endDate: endDate,
              address: address,
              city: city,
              country: country,
            }}
          >
            <button className={styles.button}>Détails de l'évenement</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;
