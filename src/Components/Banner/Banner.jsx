import React from "react";
import styled from "styled-components";
import bannerImage from "../../imgs/HeroImgs/hero4.webp";

const BannerWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
`;

const BannerText = styled.h3`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  max-width: 800px;
  text-shadow: 2px 2px 15px var(--greenFull1);
  -webkit-text-stroke: 1px #ffffff;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Banner = () => {
  return (
    <BannerWrapper>
      <BannerText>COMENTANOS TU IDEA QUE LA HACEMOS REALIDAD</BannerText>
    </BannerWrapper>
  );
};
export default Banner;
