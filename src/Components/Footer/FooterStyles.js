import styled from "styled-components";

export const FooterWrapper = styled.footer`
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);


  background-image: url(${(props) => props.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  min-width: 180px;
`;

export const FooterTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: var(--greenFull1);
`;

export const FooterLink = styled.a`
  color: white;
  margin: 5px 0;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  font-size: 0.95em;
  cursor: pointer;
  &:hover {
    color: var(--greenFull7);
    text-decoration: underline;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  font-weight: bold;
`;

export const SocialIcon = styled.a`
  color: white;
  font-weight: bold;
  font-size: 1.8em;
  transition: 1s ease-in-out;

  &:hover {
    color: var(--greenFull3);
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.div`
  font-size: 0.9em;
  margin-top: 20px;
  color: white;
  text-align: center;
`;

export const Logo = styled.img`
  width: 60px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px black;
`;


export const CreatorTag = styled.a`
margin-top: 25px;
  color: white;
  text-decoration: none;
  &:hover {
    color: var(--greenFull3);
  }
`;
