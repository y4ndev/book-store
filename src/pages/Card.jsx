import React from "react";
import axios from "axios";
import { CardItem } from "../components/CardItem";
import { useSelector } from "react-redux";

const Card = () => {
  const [dataItems, setDataItems] = React.useState([]);

  const { cardId } = useSelector((state) => state.card);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/book/${cardId}`)
      .then((resp) => {
        setDataItems(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
    window.scroll(0, 0);
  }, [cardId]);
  return (
    <>
      <CardItem {...dataItems} />
    </>
  );
};

export default Card;
