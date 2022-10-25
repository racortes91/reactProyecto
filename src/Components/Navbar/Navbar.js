import React from "react";
import logo from "../../assets/logo.jpeg";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const categorias = [
    { nombre: "Electrónica", id: 0, ruta: "/categoria/electronics" },
    { nombre: "Joyería", id: 1, ruta: "/categoria/jewelery" },
    { nombre: "Hombre", id: 2, ruta: "/categoria/men's clothing" },
    { nombre: "Mujer", id: 3, ruta: "/categoria/women's clothing" },
  ];

  return (
    <header>
      <Link  to="/">
        <img  src={logo} alt="ecommerce" />
      </Link>
      <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;
