import React from "react";
import {
  clearBasket,
  plusBasketItem,
  minusBasketItem,
  removeBasketItem,
} from "../../store/slices/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import barbage from "../../assets/images/barbage.png";
import styles from "./BasketItem.module.scss";

import empty from "../../assets/images/empty.png";

const BasketItem = () => {
  const { basketItems, totalPrice } = useSelector((state) => state.basket);

  const totalCost = basketItems.reduce((sum, obj) => sum + obj.price * obj.count, 0);
  const dispatch = useDispatch();

  return (
    <div className={styles.basket}>
      <div className={styles.title}>
        <h3>Корзина</h3>
        <span onClick={() => dispatch(clearBasket())} className={styles.clear}>
          <img src={barbage} alt="barbage" />
          <span>Очистить корзину</span>
        </span>
      </div>
      {basketItems.length > 0 ? (
        <div className={styles.items}>
          {basketItems.map((obj) => (
            <div className={styles.item}>
              <div className={styles.info}>
                <img src={obj.imageUrl} alt="book" />
                <div className={styles.desc}>
                  <span>{obj.title}</span>
                  <span>{obj.author}</span>
                </div>
              </div>
              <div className={styles.counter}>
                <span onClick={() => dispatch(minusBasketItem(obj.id))} className={styles.minus}>
                  -
                </span>
                <span className={styles.count}>{obj.count}</span>
                <span onClick={() => dispatch(plusBasketItem(obj.id))} className={styles.plus}>
                  +
                </span>
              </div>
              <span className={styles.cost}>{obj.price * obj.count} Р.</span>
              <div onClick={() => dispatch(removeBasketItem(obj.id))} className={styles.delete}>
                <img src={barbage} alt="barbage" />
                <span>Удалить</span>
              </div>
            </div>
          ))}
          <span className={styles.total}>Итого: {totalCost}</span>
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={empty} alt="empty" />
          <h4>Корзина пуста</h4>
          <span className={styles.emptyText}>
            Воспользуйтесь поиском или перейдите в{" "}
            <Link className={styles.link} to="/">
              {" "}
              каталог
            </Link>{" "}
            , чтобы найти интересные товары
          </span>
        </div>
      )}
    </div>
  );
};

export { BasketItem };
