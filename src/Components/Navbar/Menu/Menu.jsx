// Menu.jsx
import React, { lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContainer, MenuItem } from "./MenuStyles";

export function Menu({ toggleMenu, isMenuOpen, closeMenu }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      closeMenu();
      setIsAnimating(false);
    }, 500);
  };

  return (
    <MenuContainer
      onLoad={lazy}
      className={isAnimating ? "closing" : isMenuOpen ? "open" : "closed"}
    >
      <button onClick={handleClose}>X</button>
      {[
        { to: "/", label: "Inicio" },
        { to: "/contact", label: "Contacto" },
        { to: "/about-us", label: "Sobre Nosotros" },
        { to: "/disenos", label: "Nuestros Diseños" },
      ].map(({ to, label }) => (
        <MenuItem
          as={NavLink}
          to={to}
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
