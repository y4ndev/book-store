import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

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
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? styles.active : ""}
          >
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { Sidebar };
