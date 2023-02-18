import React from "react";
import { useSelector } from "react-redux";
import { BasketItem } from "../components/BasketItem";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.basketItems);


  return (
    <>
      <BasketItem />
    </>
  )
};

export default Basket;
