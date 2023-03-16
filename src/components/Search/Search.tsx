import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearchValue } from "../../store/slices/searchSlice";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const { searchValue } = useSelector(selectSearch);
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export { Search };
