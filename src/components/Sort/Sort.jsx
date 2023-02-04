import React from "react";
import styles from "./Sort.module.scss";

function Sort({ value, onChangeSort }) {
  const items = [
    { name: "Название", sortProps: "title" },
    { name: "Автору", sortProps: "author" },
    { name: "Цене", sortProps: "price" },
  ];

  return (
    <div className={styles.sort}>
      <div className={styles.inner}>
        <span className={styles.title}>Сортировка по:</span>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li
              onClick={() => onChangeSort(item)}
              key={i}
              className={value.sortProps === item.sortProps ? styles.active : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Sort };
