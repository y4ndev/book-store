import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.copyright}>Made by Yan.G</span>
      </div>
    </footer>
  );
}

export { Footer };
