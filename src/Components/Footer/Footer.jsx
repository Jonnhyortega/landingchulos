import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIconsContainer,
  SocialIcon,
  CopyRight,
  Logo,
  CreatorTag,
} from "./FooterStyles";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import bckgMenu from "../../imgs/MenuBckg/menuBckg.jpg";
import logo from "../../imgs/Logo.png";
export function Footer() {
  const navigateTo = useNavigate();
  return (
    <FooterWrapper $bckgImg={bckgMenu}>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Contáctanos</FooterTitle>
          <FooterLink href="https://wa.me/5491158227373">Soporte</FooterLink>
          <FooterLink
            onClick={() => {
              navigateTo("/write-message");
            }}
          >
            Envía tu Consulta
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Seguinos</FooterTitle>
          <SocialIconsContainer>
            <SocialIcon
              target="blank"
              href="https://www.facebook.com/search/top?q=chulos%20wood"
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon
              target="blank"
              href="https://www.instagram.com/chulos.terrazzo?igsh=a3FkcWFnMmVlamR2"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              target="blank"
              href="https://www.tiktok.com/@chuloswood?_t=8qA2TwKLLnx&_r=1"
            >
              <FaTiktok />
            </SocialIcon>
          </SocialIconsContainer>
        </FooterColumn>
      </FooterContent>
      <a href="/">
        {" "}
        <Logo src={logo} alt="Logo Chulos Design"></Logo>
      </a>
      <CopyRight>© 2024 Todos los derechos reservados.</CopyRight>
      {/* <CreatorTag href="https://wa.link/hey16u">Creator</CreatorTag> */}
    </FooterWrapper>
  );
}

export default Footer;
