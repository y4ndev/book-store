import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCategoryName } from "../../store/slices/filterSlice";
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

  function clickCategoryId(index, name) {
    dispatch(setCategoryId(index));
    dispatch(setCategoryName(name));
  }

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Книги по жанрам</h3>
      <ul className={styles.list}>
        {items.map((name, index) => (
          <li
            key={index}
            onClick={() => clickCategoryId(index, name)}
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
