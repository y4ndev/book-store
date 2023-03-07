import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./ProductsItem.module.scss";

function ProductsItem({ id, title, imageUrl, price, author, handleClick }) {
  const { basketItems } = useSelector((state) => state.basket);

  const item = {
    id,
    imageUrl,
    title,
    author,
    price,
  };

  const inBasket = basketItems.find((obj) => obj.id === id);

  return (
    <div className={styles.item}>
      <Link to={`card/${id}`} className={styles.link}>
        <img src={imageUrl} alt="book" />
      </Link>
      <span className={styles.price}>{price} Р.</span>
      <div className={styles.info}>
        <span className={styles.name}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      {inBasket ? (
        <Link to="basket" className={styles.btn + " " + styles.active}>
          К оформлению
        </Link>
      ) : (
        <button onClick={() => handleClick(item)} className={styles.btn}>
          В корзину
        </button>
      )}
    </div>
  );
}

export { ProductsItem };
