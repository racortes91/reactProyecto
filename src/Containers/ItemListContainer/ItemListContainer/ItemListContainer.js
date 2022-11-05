import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { MutatingDots } from 'react-loader-spinner'; 
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebase";

 
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

const q = query(productCollection, where('category', '==', '7FcAxiTQJOebBa1qNJdC'))

  const productCollection = collection(dataBase, 'productos');

  useEffect(() => {

    getDocs(productCollection)
    .then((result) => {
     const productLista = result.docs.map( (item) => {
        return {
          ...item.data(),
          id: item.id,
      };
    });
    setProducts(productLista);
  })
  
  .catch ((error) => {

  }) 
   .finally(setLoading(false));
    
    // const getProducts = async () => {
    //   try {
    //     const res = aw ait fetch(id ? URL_CAT : U RL_BASE);
    //     const data = await res.json();
    //     const productos = data.map(item => {
    //       return {...item, stock:Math.floor(Math.random() * 50)}
    //     });
    //     setProducts(productos);
    //   } catch {
  
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getProducts();

  }, [id, URL_BASE, URL_CAT]);

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
