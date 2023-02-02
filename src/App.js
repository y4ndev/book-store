import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Sidebar } from "./components/Sidebar";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <div className="main__inner">
              <Sidebar />
              <Products />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
