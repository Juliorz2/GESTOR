import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Producto from './components/producto';
import './App.css';

function App() {
  const productos = [
    { nombre: "Pantalon", precio: 100 },
    { nombre: "Camiseta", precio: 200 },
    { nombre: "Camiseta", precio: 300 },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        {productos.map(producto => (
          <Producto key={producto.nombre} nombre={producto.nombre} precio={producto.precio} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
