import React, { useEffect, useState } from "react";
import {
  DiseñosWrapper,
  Gallery,
  ImageCard,
  Image,
  VideoContainer,
  Overlay,
  OverlayImage,
  CloseButton,
  ArrowButton,
} from "./DiseñosStyles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { ButtonFirst } from "../../Components/Buttons/ButtonFirst/ButtonFirst";
import img1 from "../../imgs/Divisores/DivisoresImg1.webp";
import img2 from "../../imgs/Divisores/DivisoresImg2.webp";
import img3 from "../../imgs/Divisores/DivisoresImg3.webp";
import img4 from "../../imgs/Divisores/DivisoresImg4.webp";
import img5 from "../../imgs/Divisores/DivisoresImg5.webp";
import img6 from "../../imgs/Divisores/DivisoresImg6.webp";
import img7 from "../../imgs/Divisores/DivisoresImg7.webp";
import img8 from "../../imgs/Divisores/DivisoresImg8.webp";
import img9 from "../../imgs/Divisores/DivisoresImg9.webp";
import img10 from "../../imgs/Divisores/DivisoresImg10.webp";
import img11 from "../../imgs/Divisores/DivisoresImg11.webp";
import img12 from "../../imgs/Divisores/DivisoresImg12.webp";
import img14 from "../../imgs/Divisores/DivisoresImg14.webp";
import img15 from "../../imgs/Divisores/DivisoresImg15.webp";
import img16 from "../../imgs/Divisores/DivisoresImg16.webp";
import img18 from "../../imgs/Divisores/DivisoresImg18.webp";
import img19 from "../../imgs/Divisores/DivisoresImg19.webp";
import img20 from "../../imgs/Divisores/DivisoresImg20.webp";
import videoSrc from "../../videos/diseños/divisoresVideo1.mp4";

export default function Diseños() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img14,
    img15,
    img16,
    img18,
    img19,
    img20,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  let touchStartX = 0;
  let touchEndX = 0;

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeOverlay();
          break;
        case "ArrowRight":
          goToNextImage();
          break;
        case "ArrowLeft":
          goToPrevImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeOverlay();
    }
  };

  const redirectToWhatSapp = () => {
    window.open("https://wa.me/5491158227373", "_blank");
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goToNextImage();
    }
    if (touchEndX - touchStartX > 50) {
      goToPrevImage();
    }
  };

  return (
    <DiseñosWrapper>
      <h2>Divisores de Madera</h2>
      <p>
        Fabricamos divisores de ambiente elaborados en madera enchapada de
        primera calidad de la linea Faplac con cantos de abs y varillas movibles
        que regulan la entrada de luz. Realizamos diseños personalizados
        buscando funcionalidad y estética.
      </p>
      <ButtonFirst content={"Pedir cotizacion"} work={redirectToWhatSapp} />

      <h3>Galería</h3>
      <Gallery>
        {images.map((img, index) => (
          <ImageCard key={index} onClick={() => openOverlay(index)}>
            <Image loading="lazy" src={img} alt={`Divisor ${index + 1}`} />
          </ImageCard>
        ))}
      </Gallery>

      <VideoContainer>
        <span>Trabajo hecho a medida </span>
        <video id="myVideo" controls muted>
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </VideoContainer>

      {isOpen && (
        <Overlay
          onClick={handleOverlayClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <CloseButton onClick={closeOverlay}>
            <RiCloseLine />
          </CloseButton>
          <ArrowButton left onClick={goToPrevImage}>
            <AiOutlineArrowLeft />
          </ArrowButton>
          <OverlayImage
            loading="lazy"
            src={images[currentIndex]}
            alt={`Divisor ${currentIndex + 1}`}
          />
          <ArrowButton right onClick={goToNextImage}>
            <AiOutlineArrowRight />
          </ArrowButton>
        </Overlay>
      )}
    </DiseñosWrapper>
  );
}
