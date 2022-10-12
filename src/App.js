import React from "react";
import './App.css';
import Navbar from './components/Header/Navbar';
import ComponenteBoton  from './components/Header/ComponenteBoton';
import ComponenteTitulo from './components/Header/ComponenteTitulo';
import ComponenteCarrito from './components/Header/ComponenteCarrito';
import ItemListContainer from './components/Header/ItemListContainer';


const App = () => {

  let nombre = "Rafael";
  let apellido = "Cortés";
  const  mensaje = "Pronto Ecommerce";
  return (
  <>
    <Navbar nombreUsuario={nombre} apellidoUsuario={apellido}>
      <ComponenteCarrito />
    </Navbar>
    <div>
      <ItemListContainer greeting={mensaje} />
    </div>
    

  </>
  
  )

}



export default App;
