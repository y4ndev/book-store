import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { fetchDataItems } from "../store/slices/dataSlice";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  const { dataItems } = useSelector((state: any) => state.data);
  const dispatch = useAppDispatch();

  const { categoryId, sortType } = useSelector((state: any) => state.filter);
  const { searchValue } = useSelector((state: any) => state.search);
  const { paginationValue } = useSelector((state: any) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue.length > 0 ? `&q=${searchValue}` : "";
    const pagination = `&_page=${paginationValue + 1}&_limit=6`;
    const sort = sortType.sortProps;

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
