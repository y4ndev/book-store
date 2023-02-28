import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  const [dataItems, setDataItems] = React.useState([]);

  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { searchValue } = useSelector((state) => state.search);
  const { paginationValue } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue.length > 0 ? `&q=${searchValue}` : "";
    const pagination = `&_page=${paginationValue + 1}&_limit=6`;

    axios
      .get(
        `http://localhost:3001/book?${category}&_sort=${sortType.sortProps}${search}${pagination}`
      )
      .then((resp) => {
        setDataItems(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
    window.scroll(0, 0);
  }, [categoryId, sortType, searchValue, paginationValue]);
  return (
    <>
      <Sidebar />
      <Products data={dataItems} />
    </>
  );
};

export default Home;
