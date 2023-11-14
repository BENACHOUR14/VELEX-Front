import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#00997B" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ marginLeft: "30px" }}>
            <img
              src={logo}
              alt=""
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav mx-auto" style={{ gap: "50px" }}>
              <li className="nav-item">
                <a className={`nav-link  ${styles.elements}`} href="#element1">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#element2">
                  Clubs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#element3">
                  Evenements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#element4">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#element5">
                  <button className={styles.button}>Connexion</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
