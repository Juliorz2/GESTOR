import React, { use, useEffect, useState } from "react";
import axios from "axios";

const Producto = () => {
  const [producto, setproducto] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productos")
      .then((res) => {
        setproducto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="producto">
      <h1>TAREAS</h1>
      <ul>
        {producto.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} {producto.descripcion} TIEMPO DE RESPUESTA{" "}
            {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Producto;
