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
  transform: translateY(-200%);
  opacity: 0;
  transition: opacity 1s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
    color: var(--silverFull5);
    background: transparent;
    border: none;
    position: absolute;
    right: 20px;
    top: 15px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const MenuItem = styled.div`
  display: block;
  color: var(--silverFull5);
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
  background: transparent;
  padding-bottom: 5px;
  width: 100px;
  font-size: 2rem;

  &.active {
  border-bottom: 2px solid var(--silverFull5);
  }

  &:hover {
    color: var(--silverFull4);
    letter-spacing: 2px;
  }
`;
