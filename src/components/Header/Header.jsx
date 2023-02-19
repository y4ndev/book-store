import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import book from "../../assets/images/book.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

function Header() {
  const { basketItems } = useSelector((state) => state.basket);

  const basketCount = basketItems.reduce((sum, obj) => obj.count + sum, 0);

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

          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="basket" element={''} />
          </Routes>

          <Link className={styles.basket} to="/basket">
            <img src={basket} alt="basket" />
            {basketItems.length > 0 ? <span className={styles.counter}>{basketCount}</span> : ""}
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
