import React from "react";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";

function Products() {
  return (
    <div className={styles.product}>
      <Sort />
      <h3>Все</h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.img-gorod.ru/200x280/nomenclature/29/459/2945992.jpg" alt="book" />
          <span className={styles.price}>159 Р.</span>
          <div className={styles.info}>
            <span className={styles.name}>Название</span>
            <span className={styles.author}>Автор</span>
          </div>
          <button className={styles.btn}>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export { Products };
