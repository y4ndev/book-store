import React from "react";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>Страница не найдена</h1>
    </div>
  );
};

export { NotFound };
