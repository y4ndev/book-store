import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { CardItem } from "../components/CardItem";
import { NotFound } from "../components/NotFound";

const Card = () => {
  const [dataItems, setDataItems] = React.useState([]);
  const [dataId, setDataId] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/book/${id}`)
        .then((resp) => {
          setDataItems(resp.data);
          setDataId(resp.data.id);
        })
        .catch((error) => {
          console.error(error);
        });
      window.scroll(0, 0);
      console.log("1");
    };
    fetchData();
  }, []);
  console.log("2");
  return (
    <>
      {" "}
      <CardItem {...dataItems} />{" "}
    </>
  );
};

export default Card;
