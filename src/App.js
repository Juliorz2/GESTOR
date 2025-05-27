import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Producto from "./components/producto";
import { primercomponete } from "./components/primercomponete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <primercomponete />
      <main>
        <Producto />
      </main>

      <primercomponete />

      <Footer />
    </div>
  );
}

export default App;
