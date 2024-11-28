import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  Content,
  BackgroundImage,
  Logo,
  ButtonsBox,
} from "./HeroStyles";
import { useNavigate } from "react-router-dom";
import { ButtonFirst } from "../Buttons/ButtonFirst/ButtonFirst";
import img1 from "../../imgs/HeroImgs/hero1.jpg";
import img2 from "../../imgs/HeroImgs/hero2.jpg";
import img3 from "../../imgs/HeroImgs/hero3.webp";
import img4 from "../../imgs/HeroImgs/hero4.webp";
import img5 from "../../imgs/HeroImgs/hero5.webp";
import img6 from "../../imgs/HeroImgs/hero6.webp";
import img7 from "../../imgs/HeroImgs/hero7.webp";
import logo from "../../imgs/Logo.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/disenos");
  };
  const handleRedirectStore = () => {
    window.open("http://chulosdesign.mitiendanube.com");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <BackgroundImage onLoad="lazy" $bckgImg={images[currentImage]} />
      <Content $isVisible={isVisible}>
        <Logo src={logo} alt="Logo" />
        <HeroTitle>Transformá tus espacios</HeroTitle>
        <HeroSubtitle>
          Combinando funcionalidad y elegancia con nuestros{" "}
          <h1>divisores de madera</h1>
        </HeroSubtitle>
        <ButtonsBox>
          <ButtonFirst content={"Ver diseños"} work={handleRedirect} />
          {/* <ButtonFirst content={"Ver tienda"} work={handleRedirectStore} /> */}
        </ButtonsBox>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
