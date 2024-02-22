import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerCopyright}>
        <div className={styles.footerCopyrightWrapper}>
          <p className={styles.footerCopyrightText}>
            &copy; 2023 Velex. Tous droits réservés.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
