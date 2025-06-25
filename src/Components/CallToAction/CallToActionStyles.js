import styled from "styled-components";



export const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 0px;
  right: 10px;
  text-decoration: none;
  z-index: 2;
    transition: transform 0.2s ease;

  
`;

export const WhatsAppIcon = styled.img`
  width: 80px;
  border-radius: 50%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`;
