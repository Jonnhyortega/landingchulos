import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 80%;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
  border-radius: 5px;
  border: 1px solid var(--greenFull1);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);
`;


export const HamburgerMenu = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  color: var(--greenFull5);
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  height: 40px;
  border-radius: 50%;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  color: var(--greenFull3);

  &:hover {
    color: white;
    text-shadow: 0 0 3px black;

  }
`;
