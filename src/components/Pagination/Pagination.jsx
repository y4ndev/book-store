import React from "react";
import styles from "./Pagination.module.scss";

function Pagination() {
  return (
    <>
      <span className={styles.next}>Next</span>
      <span className={styles.prev}>Prev</span>
    </>
  );
}

export { Pagination };
