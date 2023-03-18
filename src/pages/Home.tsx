import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { fetchDataItems, selectData } from "../store/slices/dataSlice";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";
import { selectFilter } from "../store/slices/filterSlice";
import { selectSearch } from "../store/slices/searchSlice";

const Home = () => {
  const { dataItems } = useSelector(selectData);
  const dispatch = useAppDispatch();

  const { categoryId, sortType, paginationValue } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);

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
      <Sidebar value={categoryId} />
      <Products data={dataItems} />
    </>
  );
};

export default Home;
