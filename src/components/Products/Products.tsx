import React from "react";
import { IData } from "../../@types/types";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { addBasketItem } from "../../store/slices/basketSlice";
import { Pagination } from "../Pagination";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";
import "./Transition.scss";

interface ProductsProps {
  data: IData[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const { categoryName } = useSelector((state: any) => state.filter);
  const { status } = useSelector((state: any) => state.data);

  React.useEffect(() => {
    setShow(false);
    if (status === "success") {
      setShow(true);
    }
  }, [status]);

  const dispatch = useDispatch();

  const onClickAdd = (obj: object) => {
    dispatch(addBasketItem(obj));
  };

  return (
    <div className={styles.product}>
      <Sort />
      <h3>{categoryName}</h3>
      <CSSTransition in={show} timeout={500} unmountOnExit classNames="my-node">
        <div className={styles.items}>
          {data.map((obj, index: number) => (
            <ProductsItem handleClick={onClickAdd} key={index} {...obj} />
          ))}
        </div>
      </CSSTransition>

      <Pagination />
    </div>
  );
};

export { Products };
