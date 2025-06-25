import styled, { keyframes } from "styled-components";
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
  background-color: #0d0d0d;

  // @media (max-width: 768px) {
  //   height: 100vh;
  //     padding: 4em 0 0 0;

  // }
  // @media (max-width: 668px) {
  //     padding: 5em 0 0 0;

  // }
  // @media (max-width: 568px) {
  //     padding: 6em 0 2em 0;
  //     height: 100%;

  // }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  animation: ${fadeInOut} 5s ease-in-out infinite;
  transition: background-image 1s ease-in-out;
  filter: brightness(0.5) grayscale(20%);
`;

export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f4f4f4;
  padding: 5em 0;
  button {
    margin-top: 2em;
  }
`;

export const Logo = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 1em;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 1px 1px 5px black;
`;

export const HeroTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  letter-spacing: 3px;
  font-family: "Dancing Script", cursive;
  color: var(--greenFull5);
  text-shadow: 1px 1px 4px black;
  filter: drop-shadow(1px 1px 5px black);
  text-align: right;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  padding: 0 2em;
  font-family: "Roboto", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1;
  font-weight: 300;
  
  h1 {
    display: inline-block;
    color: var(--greenFull4);
    font-weight: 400;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 1em;
`;

export const LogoWrapper = styled.div``;
