import React from "react";
import styles from "./CardItem.module.scss";

const CardItem = ({ id, imageUrl, title, author, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.info}>
            <img src={imageUrl} alt="" />
            <div className={styles.names}>
              <span className={styles.title}>{title}</span>
              <span className={styles.author}>{author}</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptas explicabo
            nisi dicta beatae harum repellat excepturi cumque, numquam ipsa eius, dolores corrupti
            fuga omnis blanditiis nulla quas sint molestias! Eligendi temporibus repudiandae hic
            maxime recusandae pariatur, maiores dolorem dolorum assumenda ea natus error minus aut
            aperiam officiis explicabo reprehenderit molestias facilis ipsa non saepe, corrupti et?
            Assumenda, praesentium laborum! Quibusdam temporibus, culpa ipsum repellat veritatis
            quia consectetur itaque sequi atque maiores nisi iure aliquam inventore aliquid nulla,
            perferendis in corporis accusamus suscipit illo esse cumque recusandae? Aspernatur,
            dicta consequatur.
          </p>
        </div>
        <div className={styles.right}>
          <span className={styles.price}>{price} р.</span>
          <button className={styles.btn}>Купить</button>
        </div>
      </div>
    </div>
  );
};

export { CardItem };
