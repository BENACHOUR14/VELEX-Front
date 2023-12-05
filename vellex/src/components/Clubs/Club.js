import styles from "./Club.module.css";
import image from "../../assets/images/bagnoles-orne-tour-normandie-course-cyclisme-competition-regionale-nationale-velo-peloton-cyclistes-2018-1920x960.jpg";
import { Link  } from "react-router-dom";
function Club() {
  console.log("Test");
  return (
    <div className={`mt-4 text-center ${styles.event}`}>
      <div className="image">
        <img className={styles.club_img} alt="club-img" src={image}></img>
      </div>
      <div className="p-2">
        <strong> Nom du club </strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p></p>
        <div className="text-center">
          <button className={styles.button}><Link to='/profilClub' className={styles.linker}>Détails du club</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Club;
