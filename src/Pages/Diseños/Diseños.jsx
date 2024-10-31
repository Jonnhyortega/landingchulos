import React, { useEffect, useState } from "react";
import {
  DiseñosWrapper,
  Gallery,
  ImageCard,
  Image,
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

export default function Diseños() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Variables para deslizador táctil
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

  // Funciones para el deslizador táctil
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goToNextImage(); // Deslizar a la izquierda
    }
    if (touchEndX - touchStartX > 50) {
      goToPrevImage(); // Deslizar a la derecha
    }
  };

  return (
    <DiseñosWrapper>
      <h2>Divisores de Madera</h2>
      <p>
        Fabricamos divisores separadores de ambiente elaborados con madera
        enchapada de primera calidad y melamina. Nuestros diseños incluyen
        varillas móviles que permiten regular de manera eficiente la entrada de
        luz, brindando tanto funcionalidad como estética a cualquier espacio.
      </p>
      <ButtonFirst content={"Pedir cotizacion"} work={redirectToWhatSapp} />
      <Gallery>
        {images.map((img, index) => (
          <ImageCard key={index} onClick={() => openOverlay(index)}>
            <Image loading="lazy" src={img} alt={`Divisor ${index + 1}`} />
          </ImageCard>
        ))}
      </Gallery>

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
