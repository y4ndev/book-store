import React from "react";
import axios from "axios";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Sidebar } from "./components/Sidebar";

import "./styles/app.scss";

function App() {
  const [dataItems, setDataItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    const category = categoryId > 0 ? `?category=${categoryId}` : "";

    axios
      .get(`http://localhost:3001/book${category}`)
      .then((resp) => {
        setDataItems(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <div className="main__inner">
              <Sidebar value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
              <Products data={dataItems} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
