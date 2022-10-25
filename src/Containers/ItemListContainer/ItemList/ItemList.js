import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className='contenedor'>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
        </div>
    )
}

// const styles = {
//     container:{
//       display: "flex",
//       justifyContent: "space-around",
//       alignItems: "center",
//       flexWrap: "wrap",
//     }
//   }

export default ItemList