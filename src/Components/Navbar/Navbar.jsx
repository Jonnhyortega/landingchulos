// Navbar.js
import React, { useState } from "react";
import { Menu } from "./Menu/Menu";
import {
  NavbarContainer,
  HamburgerMenu,
  Logo,
  LinksContainer,
  NavLinkStyled,
} from "./NavbarStyles";
import logo from "../../imgs/Logo.png";
import bckgMenu from "../../imgs/MenuBckg/menuBckg.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavbarContainer >

      <Logo src={logo} alt="Logo" />
      <HamburgerMenu onClick={toggleMenu}>&#9776;</HamburgerMenu>

      <LinksContainer>
        <NavLinkStyled to="/" onClick={closeMenu}>
          Inicio
        </NavLinkStyled>
        <NavLinkStyled to="/contact" onClick={closeMenu}>
          Contacto
        </NavLinkStyled>
        <NavLinkStyled to="/about-us" onClick={closeMenu}>
          Nosotros
        </NavLinkStyled>
        <NavLinkStyled to="/disenos" onClick={closeMenu}>
          Diseños
        </NavLinkStyled>
      </LinksContainer>

      {isMenuOpen && (
        <Menu
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
