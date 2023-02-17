import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import book from "../../assets/images/book.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/">
            <div className={styles.logo}>
              <span>Book-store</span>
              <img src={book} alt="logo" />
            </div>
          </Link>

          <Search />
          <Link to="/basket">
            <img className={styles.basket} src={basket} alt="basket" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Header };
