import styles from "./Contact.module.css";
import img from "../../assets/images/image_ride.png";

import Header from "../Header";
function Contact() {
  return (
    <>
    <Header />
    <div className={`mt-5 ${styles.container}`}>
      <div className={styles.form}>
        <p>
          <strong>
            Nous sommes à un clic de distance, Contactez-nous quand vous le
            souhaitez.
          </strong>
        </p>
        <form>
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="lastName">Nom</label>
              <br />
              <input
                id="lastName"
                className={styles.input}
                type="text"
                name="lastName"
              />
            </div>
            <div className="col">
              <label htmlFor="firstName">Prènom</label>
              <br />
              <input
                id="firstName"
                className={styles.input}
                type="text"
                name="firstName"
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              className={styles.input}
              type="email"
              name="email"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="message">Message</label>
            <br />
            <textarea id="message" name="message" rows="3" cols="53" />
          </div>
          <button className={`mt-5 ${styles.button}`}>
            Envoyer un message
          </button>
        </form>
      </div>
      <div className="image">
        <img alt="rider" src={img} />
      </div>
    </div>
    </>
  );
}

export default Contact;
