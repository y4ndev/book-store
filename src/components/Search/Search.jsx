import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Поиск..." />
    </div>
  );
}

export { Search };
