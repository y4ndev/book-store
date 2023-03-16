import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { addBasketItem, selectBasket } from "../../store/slices/basketSlice";
import { useSelector, useDispatch } from "react-redux";

import styles from "./CardItem.module.scss";
import { Goods, selectData } from "../../store/slices/dataSlice";

interface CardGoods {
  id: number;
  title: string;
  imageUrl: string;
  author: string;
  price: number;
  count: number;
}

const CardItem: React.FC<Goods> = ({ id, imageUrl, title, author, price }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { status } = useSelector(selectData);
  const { basketItems } = useSelector(selectBasket);
  const dispatch = useDispatch();

  const dataItem: CardGoods = {
    id,
    imageUrl,
    title,
    author,
    price,
    count: 0,
  };

  const inBasket = basketItems.find((obj: { id: number }) => obj.id === id);

  const onClickAdd = (obj: CardGoods) => {
    dispatch(addBasketItem(obj));
  };

  React.useEffect(() => {
    setIsLoading(true);

    if (status === "success") {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [id]);

  return (
    <div className={styles.card}>
      <div className={styles.crumbs}>
        <Link to="/">Назад</Link>
      </div>
      {isLoading ? (
        <div className={styles.inner}>
          <div className={styles.loader}>
            <Loader />
          </div>
        </div>
      ) : (
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptas
              explicabo nisi dicta beatae harum repellat excepturi cumque, numquam ipsa eius,
              dolores corrupti fuga omnis blanditiis nulla quas sint molestias! Eligendi temporibus
              repudiandae hic maxime recusandae pariatur, maiores dolorem dolorum assumenda ea natus
              error minus aut aperiam officiis explicabo reprehenderit molestias facilis ipsa non
              saepe, corrupti et? Assumenda, praesentium laborum! Quibusdam temporibus, culpa ipsum
              repellat veritatis quia consectetur itaque sequi atque maiores nisi iure aliquam
              inventore aliquid nulla, perferendis in corporis accusamus suscipit illo esse cumque
              recusandae? Aspernatur, dicta consequatur.
            </p>
          </div>
          <div className={styles.right}>
            <span className={styles.price}>{price} р.</span>

            {inBasket ? (
              <Link to="/basket" className={styles.btn + " " + styles.active}>
                К оформлению
              </Link>
            ) : (
              <button onClick={() => onClickAdd(dataItem)} className={styles.btn}>
                Купить
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { CardItem };
