import bg from "../../assets/images/backgroundImg.png";
import styles from "./LandingSection.module.css";
function LandingSection() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${bg}')` }}
        className=" d-flex flex-column  justify-content-center align-items-center col-12 section-60vh"
      >
        <h3 style={{ color: "#225B7C" }}>
          Ensemble, dépassons chaque kilomètre et repoussons nos limites
        </h3>
        <br />
        <button className={styles.button}>Rejoins-nous</button>
      </div>
    </>
  );
}

export default LandingSection;
