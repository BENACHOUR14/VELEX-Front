import styles from "./Events.module.css";
import Header from "../Header";
import Footer from "../Footer";
// import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import imageride from "../../assets/images/image_ride.png";

function Events() {
  const header = (
    <img alt="Card" src={imageride} className={styles.cardImage} />
  );
  const footer = (
    <span>
      <Button label="Détails de l'évenement" className={styles.button} />
    </span>
  );
  return (
    <>
      <Header />
      <img></img>

      <div className="card flex justify-content-center"></div>
      {/* <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
      </span> */}
      <div className={styles.container}>
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
        <button className={styles.search}>Recherchez</button>
        <h2 className={styles.title}>Retrouvez tous les événements</h2>
        <hr
          style={{
            border: "5px solid #225B7C",
            width: "250px",
            margin: "auto",
            borderRadius: "16px",
          }}
        />

        <div className={styles.grid}>
          <Card
            title="VTT"
            footer={footer}
            header={header}
            className={styles.cardImage}
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <p>Inscription: en cours</p>
          </Card>
          <Card
            title="VTT"
            footer={footer}
            header={header}
            className={styles.cardImage}
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <p> Inscription: à venir</p>
          </Card>
          <Card
            title="VTT"
            footer={footer}
            header={header}
            className={styles.cardImage}
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <p>Terminé</p>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
