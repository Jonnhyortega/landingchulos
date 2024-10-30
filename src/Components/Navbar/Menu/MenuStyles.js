import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 90%;
  height: 80vh;
  padding: 1rem;
  transform: translateY(-200%);
  opacity: 0;
  transition: opacity 1s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  border-radius: 5px;
  border: 1px solid var(--greenFull1);
  background-image: url(${(props) => props.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &.open {
    animation: ${slideIn} 0.5s forwards;
    opacity: 1;
  }

  &.closed {
    animation: ${slideOut} 0.5s forwards;
  }

  button {
    color: white;
    border: none;
    position: absolute;
    background: transparent;
    right: 10px;
    top:0;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const MenuItem = styled.div`
  display: block;
  padding: 1em;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
  background: var(--greenFull1);
  border-radius: 15px;
  &:hover {
    color: black;
    letter-spacing: 2px;
  }
`;
