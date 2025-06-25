import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  z-index: 998;
  background-color: var(--greenFull1);
  
`;


export const HamburgerMenu = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  color: var(--silverFull7);
  
  @media (max-width: 768px) {
    display: flex;  
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
  font-weight: 600;
  font-size: 1.2em;
  transition: color 0.1s ease;
  color: white;
    color: var(--silverFull7);

  &:hover {
    color: var(--greenFull7);
    // text-shadow: 0 0 3px white;

  }
`;
