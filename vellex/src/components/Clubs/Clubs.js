import styles from "./Clubs.module.css";
import Club from "./Club";
function Clubs() {
  console.log("Test");
  return (
    <>
      <div className={styles.container}>
        <h2 className="text-center p-3" style={{ color: "#225B7C" }}>
          Retrouvez tous les clubs
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
            placeholder="Nom du club"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Lieu"
          ></input>
          <button className={styles.search}> Recherchez </button>
        </div>
        <div className="content">
          <div className="title mt-3"></div>
          <div>
            <div className={styles.grid}>
              <Club />
              <Club />
              <Club />
              <Club />
              <Club />
              <Club />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clubs;
