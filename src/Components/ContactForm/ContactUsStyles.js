import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;

`;

export const ContactInfo = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 300px;
  border-radius: 5px;
  background-image: url(${(props) => props.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: center;
    width: 100%;
    paddign: 1em;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  h2 {
    color: var(--greenFull5);
    position: relative;
    z-index: 2;
  }
`;

export const FirstBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  z-index: 2;

  a,
  p {
    margin: 0;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    color: var(--greenFull3);
  }

  svg {
    margin-right: .4em;
    color: var(--greenFull7);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  z-index: 2;
  a {
    text-decoration: none;
    color: var(--greenFull5);
    font-size: 1.5rem;
    text-shadow: 0 0 3px black;

    &:hover {
      color: var(--silverFull7);
      text-shadow: 0 0 3px black;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 350px;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 668px) {
    width: 100%;
  }

  div {
    position: relative;

    input {
      width: 100%;
      color: black;
      font-size: inherit;
      font-family: inherit;
      background-color: transparent;
      padding: 0.35em 0.45em;
      border: 1px solid var(--silverFull3);
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: black;
      font-weight: 300;
    }

    span {
      position: absolute;
      background-color: var(--greenFull4);
      transition: transform 0.5s ease;
    }

    .bottom,
    .top {
      height: 2px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 2px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    input:focus ~ .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    input:focus ~ .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    input:focus ~ .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    input:focus ~ .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--greenFull1);
`;
