import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/slices/searchSlice";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();
  const makeSearch = React.useMemo(
    () =>
      debounce((str) => {
        dispatch(setSearchValue(str));
      }, 700),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    makeSearch(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input value={value} onChange={onChangeInput} type="text" placeholder="Поиск..." />
    </div>
  );
};

export { Search };
