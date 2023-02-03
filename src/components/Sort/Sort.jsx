import React from "react";
import styles from "./Sort.module.scss";

function Sort() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sortItems = ["Названия", "Автору", "Цене"];

  return (
    <div className={styles.sort}>
      <div className={styles.inner}>
        <span className={styles.title}>Сортировка по:</span>
        <ul className={styles.list}>
          {sortItems.map((value, index) => (
            <li
              onClick={() => setActiveIndex(index)}
              key={index}
              className={activeIndex === index ? styles.active : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Sort };
