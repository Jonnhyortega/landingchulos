import React from "react";
import ContactUs from "../../Components/ContactForm/ContactUs";
import styled from "styled-components";

const ContactWrapper = styled.div`
  width: 100%;
`;
export default function Contact() {
  return (
    <ContactWrapper>
      <ContactUs />
    </ContactWrapper>
  );
}
