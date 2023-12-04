import image from "../../../assets/images/image_ride.png";

import styles from "./Presentation.module.css";

function Presentation() {
  return (
    <div
      className={` col-12 section-50vh d-flex flex-row align-items-center justify-content-center ${styles.container}`}
    >
      <div
        className={` ${styles.paragraph} align-items-center justify-content-center`}
      >
        <p>
          Bienvenue sur Velex, la plateforme ultime dédiée à tous les amateurs
          de cyclisme !
        </p>
        <p>
          Que vous soyez un club de vélo passionné ou un amateur de deux-roues
          en quête d'aventure, Velex est l'endroit où l'esprit du vélo prend
          vie.
        </p>
        <p>Rejoignez-nous pour vivre la communauté cycliste ultime ! Blabla</p>
        <button className={styles.button}>En savoir plus</button>
      </div>
      <div>
        <img src={image} className={styles.image} alt="ride" />
      </div>
    </div>
  );
}

export default Presentation;
