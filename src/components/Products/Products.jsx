import React from "react";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";

function Products({ data, value, onChangeSort }) {
  return (
    <div className={styles.product}>
      <Sort value={value} onChangeSort={onChangeSort} />
      <h3>Все</h3>
      <div className={styles.items}>
        {data.map((obj, index) => (
          <ProductsItem key={index} {...obj} />
        ))}
      </div>
    </div>
  );
}

export { Products };
