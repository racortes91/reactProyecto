import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";
import { DialogContent } from "@mui/material";
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart} = useContext(Context);

  let stock = 0;
  if(IsInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };

  return (
    <>
      <div className="contenedor__detail">
          <div>
            <img className="foto__producto-detail" alt={product.title} src={product.image} />
          </div>
          <div className="contenedor__textos">
            <h1 className="titulo__producto">{product.title}</h1>
            <span className="texto__descripcion">{product.description}</span>
            <h2 className="producto__precio">{product.price}</h2>
          </div>
        </div>
        <div className="contenedor__boton">
          {!isPressedButton ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <button className="boton__finalizar" >Finalizar Compra</button>
              </Link>
              
            )}
             <div className="contenedor__boton2"> 
              <Link to="/">
                <button className="boton__finalizar" > Ver más Productos</button>
              </Link>  
        </div>   
        </div>
          
    </>
  );
};

export default ItemDetail;
