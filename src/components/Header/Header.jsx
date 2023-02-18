import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import book from "../../assets/images/book.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

function Header() {
  const { basketItems } = useSelector((state) => state.basket);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/">
            <div className={styles.logo}>
              <span>Book-store</span>
              <img src={book} alt="logo" />
            </div>
          </Link>

          <Search />
          <Link className={styles.basket} to="/basket">
            <img src={basket} alt="basket" />
            {basketItems.length > 0 ? (
              <span className={styles.counter}>{basketItems.length}</span>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
