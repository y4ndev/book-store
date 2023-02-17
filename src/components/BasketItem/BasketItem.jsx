import React from "react";
import styles from "./BasketItem.module.scss";

const BasketItem = () => {
  return (
    <div className={styles.basket}>
      <div className={styles.title}>
        <h3>Корзина</h3>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.info}>
            <img src="" alt="" />
            <span>Название</span>
            <span>Автор</span>
          </div>
          <div className={styles.counter}>
            <span className={styles.minus}>-</span>
            <span className={styles.count}>1</span>
            <span className={styles.plus}>+</span>
          </div>
          <span className={styles.cost}>550 Р.</span>
        </div>
      </div>
    </div>
  );
};

export { BasketItem };
