import Event from "./Event";
import styles from "./Events.module.css";

function Events() {
  console.log("test");
  return (
    <>
      <div className={styles.container}>
        <h2 className="text-center p-3" style={{ color: "#225B7C" }}>
          Retrouvez tous les événements
        </h2>
        <hr
          // la couleur à changer !!
          style={{
            border: "5px solid #225B7C",
            width: "250px",
            margin: "auto",
          }}
        />
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nom de l'évenement"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Lieu"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Catégories"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Date"
          ></input>
        </div>
        <div className="text-center">
          <button className={styles.search}> Recherchez </button>
        </div>
        <div className="content">
          <div className="title mt-3"></div>
          <div>
            <div className={styles.grid}>
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
