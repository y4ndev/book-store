import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setCategoryId, setCategoryName } from "../../store/slices/filterSlice";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const { categoryId } = useSelector(selectFilter);
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

  function clickCategoryId(index: number, name: string) {
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
};

export { Sidebar };
