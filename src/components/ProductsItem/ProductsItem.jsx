import React from "react";
import styles from "./ProductsItem.module.scss";

function ProductsItem({ id, title, imageUrl, price, author }) {
  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="book" />
      <span className={styles.price}>{price} Р.</span>
      <div className={styles.info}>
        <span className={styles.name}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <button className={styles.btn}>В корзину</button>
    </div>
  );
}

export { ProductsItem };
