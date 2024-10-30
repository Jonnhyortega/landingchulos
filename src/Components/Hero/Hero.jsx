import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  Content,
  BackgroundImage,
  Logo,
} from "./HeroStyles";
import { useNavigate } from "react-router-dom";
import { ButtonFirst } from "../Buttons/ButtonFirst/ButtonFirst";
import img1 from "../../imgs/HeroImgs/hero1.jpg";
import img2 from "../../imgs/HeroImgs/hero2.jpg";
import img3 from "../../imgs/HeroImgs/hero3.jpg";
import img4 from "../../imgs/HeroImgs/hero4.jpg";
import img5 from "../../imgs/HeroImgs/hero5.jpg";
import img6 from "../../imgs/HeroImgs/hero6.jpg";
import img7 from "../../imgs/HeroImgs/hero7.jpg";
import logo from "../../imgs/logo.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/disenos");
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
      <BackgroundImage $bckgImg={images[currentImage]} />
      <Content $isVisible={isVisible}>
        <Logo src={logo} alt="Logo" />
        <HeroTitle>Renová tu espacio</HeroTitle>
        <HeroSubtitle>
          <strong>
            Con funcionalidad y elegancia con nuestros divisores de madera
          </strong>
        </HeroSubtitle>
        <ButtonFirst content={"Ver diseños"} work={handleRedirect} />
      </Content>
    </HeroContainer>
  );
};

export default Hero;
