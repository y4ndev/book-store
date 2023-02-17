import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <div className="main__inner">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="basket" element={<Basket />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
