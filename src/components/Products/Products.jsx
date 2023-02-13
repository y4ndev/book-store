import React from "react";
import { Pagination } from "../Pagination";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";

function Products({ data}) {
  return (
    <div className={styles.product}>
      <Sort />
      <h3>Все</h3>
      <div className={styles.items}>
        {data.map((obj, index) => (
          <ProductsItem key={index} {...obj} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export { Products };
