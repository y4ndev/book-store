import React from "react";
import { fetchDataCard } from "../store/slices/dataSlice";
import { useParams } from "react-router-dom";

import { CardItem } from "../components/CardItem";
import { NotFound } from "../components/NotFound";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {

  const { dataCard, status } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchDataCard(id));
  }, []);


  return (
    <>{status === "error" ? <NotFound /> : <CardItem {...dataCard} />}</>
  );
};

export default Card;
