import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className={styles.navbar} style={{ width: "100%" }}>
        <Link
          to="/"
          className={styles.navbarBrand}
          style={{ marginLeft: "30px" }}
        >
          <img
            src={logo}
            alt=""
            width="60"
            height="60"
            className={styles.logo}
          />
        </Link>

        <div className={styles.containerFluid}>
          <div className={styles.navbarCollapse}>
            <ul className={styles.navbarNav} style={{ gap: "50px" }}>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/">
                  Accueil
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/clubs">
                  Clubs
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/events">
                  Evenements
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/contact">
                  Contact
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/blog">
                  Blog
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.elements} to="/connection">
                  <button className={styles.button}>Connexion</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
