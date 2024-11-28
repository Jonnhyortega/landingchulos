import styled, { css, keyframes } from "styled-components";

const slideInRight = keyframes`
  0% {
    transform: translateX(100%); 
    }
    
    50%{
      transform: translateX(150%); 
      
  }
  to {
    transform: translateX(0); 
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%); 
  }
  to {
    transform: translateX(0); 
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0); 
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%); 
  }
`;
const titleFrame = keyframes`
  from {
    opacity: 0;
   transform: translateY(-30%);
   
   }
   to {
    opacity: 1; 
    transform: translateY(0);
  }
`;

export const DiseñosWrapper = styled.div`
  // * {
  //   border: 1px solid gold;
  // }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background-color: transparent;
  min-height: 100vh;

  h2 {
    font-size: 2.5em;
    color: var(--greenFull1);
    animation: ${titleFrame} 1s ease-in-out;
    font-weight: bold;
    text-align: center;
    padding: 0.2em 1em;
    @media (max-width: 568px) {
      font-size: 2em;
    }
  }

  p {
    color: var(--silverFull1);
    font-weight: 600;
    font-size: 1.2em;
    padding: 0 3em;
    text-align: left;
    animation: ${titleFrame} 1s ease-in-out;

    @media (max-width: 568px) {
      font-size: 1em;
    }
  }

  h3 {
    font-size: 2em;
    color: var(--greenFull2);
    margin-top: 70px;
    font-weight: 500;
  }

  button {
    animation: ${titleFrame} 0.5s ease-in-out;
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 50px;
  width: 100%;
  height: 350px;
  border-top: 10px solid var(--greenFull1);
  box-shadow: 1px 1px 10px black;
  font-weight: 400;
`;

export const ImageCard = styled.div`
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 200px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px black;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 3px;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  gap: 10px;
  margin: 20px auto;
  width: 100%;

  span {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: var(--greenFull2);
    font-weight: 500;
  }

  video {
    width: auto;
    max-width: 100%;
    height: 500px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px var(--greenFull1);
  }

  @media (max-width: 568px) {
    span {
      font-size: 1.5em;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--greenFull3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const OverlayImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease, filter 0.4s ease;

  animation: ${({ direction }) =>
    direction === "left"
      ? css`
          ${slideInLeft} 0.5s forwards
        `
      : direction === "right"
      ? css`
          ${slideInRight} 0.5s forwards
        `
      : "none"};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: var(--greenFull1);
    transform: scale(1.2);
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  transition: 0.5s;
  ${(props) =>
    props.left &&
    css`
      left: 30px;
    `}

  ${(props) =>
    props.right &&
    css`
      right: 30px;
    `}

  &:hover {
    color: var(--greenFull1);
  }
`;

export const QuoteButton = styled.a`
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
