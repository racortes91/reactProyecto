import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Navbar  = ({nombreUsuario, apellidoUsuario, children}) => {

  const categorias = [
    {nombre: "Juegos", id: 0, enlace: "#"},
    {nombre: "Figuras", id: 1, enlace: "#"},
    {nombre: "Camisetas", id: 2, enlace: "#"},
    {nombre: "Consolas", id: 3, enlace: "#"},
  ]


  return (
  <>
    <header>
        <a href="#">
          <img src={logo} alt="pixel games" />
        </a>
        <h1>Hola {nombreUsuario} {apellidoUsuario}</h1>
        <nav>
            {
              categorias.map((categoria) => {
                return <a key={categoria.id} href={categoria.enlace}>{categoria.nombre}</a>
              })
            }
        </nav>
    </header>
  </>
  )
}

export default Navbar;