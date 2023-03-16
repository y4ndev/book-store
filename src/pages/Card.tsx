import React from "react";
import { fetchDataCard, selectData } from "../store/slices/dataSlice";
import { useParams } from "react-router-dom";

import { CardItem } from "../components/CardItem";
import { NotFound } from "../components/NotFound";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";

const Card: React.FC = () => {
  const { dataCard, status } = useSelector(selectData);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchDataCard(id));
    }
  }, []);

  return <>{status === "error" ? <NotFound /> : <CardItem {...dataCard} />}</>;
};

export default Card;
