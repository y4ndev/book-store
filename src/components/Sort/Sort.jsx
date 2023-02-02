import React from "react";
import styles from "./Sort.module.scss";

function Sort() {
  return (
    <div className={styles.sort}>
      <div className={styles.inner}>
        <span className={styles.title}>Сортировка по:</span>
        <ul className={styles.list}>
          <li>Названию</li>
          <li>Автору</li>
          <li>Цене</li>
        </ul>
      </div>
    </div>
  );
}

export { Sort };
