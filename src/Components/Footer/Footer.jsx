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
  LogoWrapper,
  LogoTitle,
  CreatorTag,
} from "./FooterStyles";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
export function Footer() {
  const navigateTo = useNavigate();
  return (
    <FooterWrapper>
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
            {/* <SocialIcon target="blank" href="https://wa.me/5491158227373">
              <FaWhatsapp />
            </SocialIcon> */}
          </SocialIconsContainer>
        </FooterColumn>
      </FooterContent>
      <CopyRight>
        <LogoWrapper>
          <LogoTitle>Chulo's</LogoTitle>
        </LogoWrapper>
        © 2024 Todos los derechos reservados.
      </CopyRight>
      <CreatorTag href="https://wa.link/hey16u">Creator</CreatorTag>
    </FooterWrapper>
  );
}

export default Footer;
