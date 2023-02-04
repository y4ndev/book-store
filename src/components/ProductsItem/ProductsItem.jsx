import React from "react";
import styles from "./ProductsItem.module.scss";

function ProductsItem({ title, imageUrl, price, author }) {
  return (
    <div className={styles.item}>
      <a className={styles.link}>
        <img src={imageUrl} alt="book" />
      </a>
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
