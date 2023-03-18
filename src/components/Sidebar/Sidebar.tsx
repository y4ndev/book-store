import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId, setCategoryName } from "../../store/slices/filterSlice";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  value: number;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();

  console.log("render");

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
            className={value === index ? styles.active : ""}
          >
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
});
export { Sidebar };
