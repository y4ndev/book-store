import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDataItems } from "../store/slices/dataSlice";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  const { dataItems, status } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { searchValue } = useSelector((state) => state.search);
  const { paginationValue } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue.length > 0 ? `&q=${searchValue}` : "";
    const pagination = `&_page=${paginationValue + 1}&_limit=6`;
    const sort = sortType.sortProps;

    // axios
    //   .get(`http://localhost:3001/book?${category}&_sort=${sort}${search}${pagination}`)
    //   .then((resp) => {
    //     setDataItems(resp.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    dispatch(fetchDataItems({ category, search, pagination, sort }));
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
