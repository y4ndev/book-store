import React from "react";
import styles from "./Sort.module.scss";
import { setSortType } from "../../store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

function Sort() {
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();

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
              onClick={() => dispatch(setSortType(item))}
              key={i}
              className={sortType.sortProps === item.sortProps ? styles.active : ""}
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
