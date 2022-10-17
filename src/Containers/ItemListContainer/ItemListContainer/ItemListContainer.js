import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import "./ItemListContainer.css";
import { MutatingDots } from 'react-loader-spinner'



export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL_CAT);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  return (
    <>
    <span>
      {< >{loading ? <MutatingDots 
  height="100"
  width="100"
  color="black"
  secondaryColor= 'black'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
 : <ItemList products={products} />}</>}
    </span>
    </>
  );
};
