import React from "react";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Книги по жанрам</h3>
      <ul className={styles.list}>
        <li className={styles.active}>Все</li>
        <li>Художественная литература</li>
        <li>Нехудожественная литература</li>
        <li>Детям и родителям</li>
        <li>Учебная литература</li>
        <li>Саморазвитие</li>
        <li>Научная литература</li>
        <li>Исскуство и культура</li>
        <li>Психология</li>
        <li>Бизнес литература</li>
      </ul>
    </aside>
  );
}

export { Sidebar };
