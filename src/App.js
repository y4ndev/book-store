import React from "react";
import axios from "axios";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Sidebar } from "./components/Sidebar";

import "./styles/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [dataItems, setDataItems] = React.useState([]);
  const [sortType, setSortType] = React.useState({ name: "Название", sortProps: "title" });
  const [categoryId, setCategoryId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue.length > 0 ? `&q=${searchValue}` : "";

    axios
      .get(`http://localhost:3001/book?${category}&_sort=${sortType.sortProps}${search}`)
      .then((resp) => {
        setDataItems(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
    window.scroll(0, 0);
    console.log(sortType);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
        </SearchContext.Provider>

        <main className="main">
          <div className="container">
            <div className="main__inner">
              <Sidebar value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
              <Products value={sortType} onChangeSort={(id) => setSortType(id)} data={dataItems} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
