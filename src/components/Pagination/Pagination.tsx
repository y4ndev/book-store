import React from "react";
import { selectFilter, setPaginationValue } from "../../store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";

const Pagination: React.FC = () => {
  const { paginationValue } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const items = ["1", "2", "3"];

  return (
    <ul className={styles.list}>
      <li
        className={styles.prev}
        onClick={() => dispatch(setPaginationValue(paginationValue > 0 ? paginationValue - 1 : 0))}
      >
        <a>{"<"}</a>
      </li>
      {items.map((value, index) => (
        <li
          key={index}
          onClick={() => dispatch(setPaginationValue(index))}
          className={paginationValue === index ? styles.active : ""}
        >
          <a>{value}</a>
        </li>
      ))}
      <li
        className={styles.next}
        onClick={() => dispatch(setPaginationValue(paginationValue < 2 ? paginationValue + 1 : 2))}
      >
        <a>{">"}</a>
      </li>
    </ul>
  );
};

export { Pagination };
