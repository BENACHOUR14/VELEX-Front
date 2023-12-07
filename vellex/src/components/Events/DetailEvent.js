import { useLocation } from "react-router-dom";
import Header from "../Header";
import styles from "./DetailEvent.module.css";

function DetailEvent() {
  const location = useLocation();
  const { name, eventType, description, startDate, address, city, country } =
    location.state;
  // console.log(location.state);
  // const { name, eventType, description } = location.state;
  console.log(startDate);

  function formatDate(date) {
    const originalDate = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={`pt-5 ${styles.eventdescription}`}>
          <div className={styles.event}>
            <div className={styles.title}>
              <h1>{name}</h1>
              <button className={styles.button}>S'inscrire</button>
            </div>
            <div className="eventType">
              <h3>Type de l'évenement </h3>
              <p>
                <strong>{eventType}</strong>
              </p>
            </div>
            <div className="eventInfo">
              <h3>Informations : </h3>
              <p>
                <strong>{description}</strong>
              </p>
            </div>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.test}>
              <h3>Quand</h3>
              <p>
                <strong>{formatDate(startDate)}</strong>
              </p>
            </div>

            <div className={styles.test}>
              <h3>Où</h3>
              <p>
                <strong>
                  Velo Club
                  <br />
                  {address}
                  <br />
                  {city} <br />
                  {country} <br />
                </strong>
              </p>
            </div>
            <div className={styles.map}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailEvent;
