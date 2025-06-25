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
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  transform: translateY(-200%);
  opacity: 0;
  transition: opacity 1s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space;
  gap: 50px;
  border-radius: 5px;
  border: 1px solid var(--greenFull1);
  backdrop-filter: blur(25px) saturate(0%);
  -webkit-backdrop-filter: blur(25px) saturate(0%);
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--greenFull1);

  &.open {
    animation: ${slideIn} 0.5s forwards;
    opacity: 1;
  }

  &.closed {
    animation: ${slideOut} 0.5s forwards;
  }

  button {
    color: var(--greenFull1);
    border: none;
    position: absolute;
    background: transparent;
    right: 50px;
    top: 5px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const MenuItem = styled.div`
  display: block;
  color: var(--greenFull3);
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
  background: transparent;
  border-radius: 15px;

  &:hover {
    color: black;
    letter-spacing: 2px;
  }
`;
