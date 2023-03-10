import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.copyright}>Made by Yan.G</span>
      </div>
    </footer>
  );
};

export { Footer };
