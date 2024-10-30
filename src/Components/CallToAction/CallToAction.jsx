import React, { useState, useEffect } from "react";
import { WhatsAppLink, WhatsAppIcon } from "./CallToActionStyles";
import logo from "../../imgs/logoWsp1.png";

export const CallToAction = () => {
  const [shakeThis, setShakeThis] = useState(false);

  const shakeThisElement = () => {
    setShakeThis((prev) => !prev); 
  };

  useEffect(() => {
    const interval = setInterval(shakeThisElement, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <WhatsAppLink
      className={shakeThis ? "shake" : ""}
      href="https://wa.me/5491158227373"
      target="_blank"
    >
      <WhatsAppIcon src={logo} alt="WhatsApp" />
    </WhatsAppLink>
  );
};

export default CallToAction;
