import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContainer, MenuItem, Overlay } from "./MenuStyles";

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
      <Overlay
        className={isMenuOpen ? "open" : ""}
        onClick={handleClose}
      />
      <MenuContainer
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
