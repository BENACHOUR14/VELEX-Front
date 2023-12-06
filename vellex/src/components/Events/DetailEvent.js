import styles from "./DetailEvent.module.css";

function DetailEvent() {
  return (
    <div className={styles.body}>
      <div className={`pt-5 ${styles.eventdescription}`}>
        <div className={styles.event}>
          <div className={styles.title}>
            <h1>Titre de l'évenement</h1>
            <button className={styles.button}>S'inscrire</button>
          </div>
          <div className="eventType">
            <h3>Type de l'évenement</h3>
            <p>
              <strong>Vtt</strong>
            </p>
          </div>
          <div className="eventInfo">
            <h3>Informations : </h3>
            <p>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </strong>
            </p>
          </div>
          <div className="contact">
            <h3>Contact : </h3>
            <p>
              <strong>
                Organisateur : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </strong>
            </p>
            <p>
              <strong>
                Club : Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </strong>
            </p>
          </div>
        </div>
        <div className={styles.eventDetails}>
          <div className={styles.test}>
            <h3>Quand</h3>
            <p>
              <strong>22 Novembre 2023</strong>
            </p>
          </div>

          <div className={styles.test}>
            <h3>Où</h3>
            <p>
              <strong>
                Velo Club
                <br />
                10 Rue du Nantes
                <br />
                Nantes <br />
                France <br />
              </strong>
            </p>
          </div>
          <div className={styles.map}></div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
