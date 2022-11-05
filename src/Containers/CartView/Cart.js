import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import './Cart.css';


export const Cart = ({ estilo, color }) => {
  const { cart } = useContext(Context);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="contenedor__vacio">
            <h1>
              ¿No tienes Productos?
            </h1>
            <button className="text__btn">
              <Link className="btn__agregar" to="/">Agrega productos Aquí</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          {cart.map((producto) => (

            <div className="contenedor__carrito">
              <h1 key={producto.id}>{producto.title}</h1>
              <p>$</p>
            </div>

          ))}
        </>
      )}
    </>
  );
};
