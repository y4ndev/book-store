import React from "react";
import styles from "./Sidebar.module.scss";

function Sidebar({ value, onChangeCategory }) {
  const items = [
    "Все",
    "Художественная литература",
    "Нехудожественная литература",
    "Детям и родителям",
    "Учебная литература",
    "Саморазвитие",
    "Научная литература",
    "Исскуство и культура",
    "Психология",
    "Бизнес литература",
  ];

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Книги по жанрам</h3>
      <ul className={styles.list}>
        {items.map((name, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            className={value === index ? styles.active : ""}
          >
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { Sidebar };
