import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };


  return (
    <div className="contenedor__item">
      <button className="btn__restar" onClick={subtract}>-</button>
      <h2>{count}</h2>
      <button className="btn__sumar" onClick={add}>+</button>
      <button className="btn__agregar" disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span className="btn__texto">{stock === 0 ? 'Sin Stock' : 'Agrega al carrito'}</span>
      </button>
    </div>
  );
};

export default ItemCount;







