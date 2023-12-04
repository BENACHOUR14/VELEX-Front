import image from "../../assets/images/bagnoles-orne-tour-normandie-course-cyclisme-competition-regionale-nationale-velo-peloton-cyclistes-2018-1920x960.jpg";
import styles from "./Event.module.css";
function Event() {
  return (
    <div className={`mt-4 text-center ${styles.event}`}>
      <div className={styles.date}>
        <strong>20 NOV</strong>
      </div>

      <div className="image">
        <img className={styles.event_img} alt="event-img" src={image}></img>
      </div>
      <div className="p-2">
        <strong> VTT : Nom de l'évenement</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p>
          <strong>Terminée</strong>
        </p>
        <div className="text-center">
          <button className={styles.button}>Détails de l'évenement</button>
        </div>
      </div>
    </div>
  );
}

export default Event;
