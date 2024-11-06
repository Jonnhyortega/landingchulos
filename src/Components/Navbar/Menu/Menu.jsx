import React, { lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContainer, MenuItem } from "./MenuStyles";
import bckgMenu from "../../../imgs/MenuBckg/menuBckg1.webp"
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
    <>
      <MenuContainer
        $bckgImg={bckgMenu}
        onLoad={lazy}
        className={isAnimating ? "closing" : isMenuOpen ? "open" : "closed"}
      >
        <button onClick={handleClose}>x</button>
        <MenuItem as={NavLink} to="/" onClick={handleClose}>
          Inicio
        </MenuItem>
        <MenuItem as={NavLink} to="/contact" onClick={handleClose}>
          Contacto
        </MenuItem>
        <MenuItem as={NavLink} to="/about-us" onClick={handleClose}>
          Sobre Nosotros
        </MenuItem>
        <MenuItem as={NavLink} to="/disenos" onClick={handleClose}>
          Nuestros Diseños
        </MenuItem>
      </MenuContainer>
    </>
  );
}
