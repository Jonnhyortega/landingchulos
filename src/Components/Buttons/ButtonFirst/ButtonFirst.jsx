import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: var(--greenFull1);
  color: var(--silverFull7);
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1.1em;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 200px;
  margin: 0 auto;

  @media (max-width: 568px) {
    width: 150px;
    padding: 9px 18px;
  }
  &:hover {
    transform: translateY(-3px);
    background: var(--greenFull3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonFirst = ({ content, work }) => {
  return <ButtonStyled onClick={work}>{content || "Click Me!"}</ButtonStyled>;
};

export default ButtonFirst;
