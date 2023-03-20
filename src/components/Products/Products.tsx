import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { Pagination } from "../Pagination";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sort } from "../Sort";
import styles from "./Products.module.scss";
import "./Transition.scss";
import { Goods, selectData } from "../../store/slices/dataSlice";
import { selectFilter } from "../../store/slices/filterSlice";

interface ProductsProps {
  data: Goods[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const { categoryName } = useSelector(selectFilter);
  const { status } = useSelector(selectData);

 

  React.useEffect(() => {
    setShow(false);
    if (status === "success") {
      setShow(true);
    }
  }, [status]);

  return (
    <div className={styles.product}>
      <Sort />
      <h3>{categoryName}</h3>
      <CSSTransition in={show} timeout={500} unmountOnExit classNames="my-node">
        <div className={styles.items}>
          {data.map((obj, index: number) => (
            <ProductsItem key={index} {...obj} />
          ))}
        </div>
      </CSSTransition>

      <Pagination />
    </div>
  );
};

export { Products };
