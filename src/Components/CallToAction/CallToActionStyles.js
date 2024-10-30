import styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-2px, 0);
  }
  20% {
    transform: translate(2px, 0);
  }
  30% {
    transform: translate(-2px, 0);
  }
  40% {
    transform: translate(2px, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 0px;
  right: 10px;
  text-decoration: none;
  z-index: 2;

  &.shake { /* Cambié de .shake a &.shake para aplicarlo correctamente */
    animation: ${shakeAnimation} 0.4s linear infinite; // Cambié a shakeAnimation
  }
`;

export const WhatsAppIcon = styled.img`
  width: 60px;
  border-radius: 50%;

  &:hover {
    transform: scale(1.15);
  }
`;
