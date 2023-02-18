import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasketItem } from "../../store/slices/basketSlice";
import { Pagination } from "../Pagination";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";

function Products({ data }) {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.basketItems);

  const onClickAdd = (obj) => {
    dispatch(addBasketItem(obj));
  };

  return (
    <div className={styles.product}>
      <Sort />
      <h3>Все</h3>
      <div className={styles.items}>
        {data.map((obj, index) => (
          <ProductsItem handleClick={onClickAdd} key={index} {...obj} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export { Products };
