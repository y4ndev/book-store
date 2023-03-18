import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBasketItem } from "../../store/slices/basketSlice";
import styles from "./ProductsItem.module.scss";


interface ProductsItemProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  author: string;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ id, title, imageUrl, price, author }) => {
  const { basketItems } = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();



  const dataItem = {
    id,
    imageUrl,
    title,
    author,
    price,
    count: 0,
  };

  const inBasket = basketItems.find((obj: { id: number }) => obj.id === id);

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
        <button onClick={() => dispatch(addBasketItem(dataItem))} className={styles.btn}>
          В корзину
        </button>
      )}
    </div>
  );
};

export { ProductsItem };
