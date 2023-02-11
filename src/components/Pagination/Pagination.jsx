import React from "react";
import { PaginationContext } from "../../App";
import styles from "./Pagination.module.scss";

function Pagination() {
  const { pagination, setPagination } = React.useContext(PaginationContext);

  const items = ["1", "2", "3"];

  return (
    <ul className={styles.list}>
      <li
        className={styles.prev}
        onClick={() => setPagination(pagination > 0 ? pagination - 1 : 0)}
      >
        <a>{"<"}</a>
      </li>
      {items.map((value, index) => (
        <li
          onClick={() => setPagination(index)}
          className={pagination === index ? styles.active : ""}
        >
          <a>{value}</a>
        </li>
      ))}
      <li
        className={styles.next}
        onClick={() => setPagination(pagination < 2 ? pagination + 1 : 2)}
      >
        <a>{">"}</a>
      </li>
    </ul>
  );
}

export { Pagination };
