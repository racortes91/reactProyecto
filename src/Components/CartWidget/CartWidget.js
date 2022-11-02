import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/CustomContext";
import './CartWidget.css';

export const CartWidget = () => {
  const { qty } = useContext(Context);
  return (
    <>
    <div className="contenedor__carrito">
      <p>{qty}</p>
      <div>
        <ShoppingCartIcon />
      </div>
    </div>
      
  
    </>
  );
};