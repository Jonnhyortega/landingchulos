import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormGroup,
  Label,
  FirstBoxContent,
  Wrapper,
  ContactInfo,
  SocialLinks,
} from "./ContactUsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactUs.css";
import ModalForm from "./ModalForm/ModalForm";
import bckgImg from "../../imgs/ContactInfo/ContactBckg2.jpg";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();
  const [modalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const updateModalOpen = (newValue) => {
    setIsModalOpen(newValue);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3fmshao",
        "template_saxokl9",
        form.current,
        "UShoZK6u2XqjK0Lgf"
      )
      .then(
        () => {
          console.log("Mensaje enviado con éxito!");
          form.current.reset();
          setIsModalOpen(true);
        },
        (error) => {
          console.log("Ocurrió un error: ", error.text);
        }
      );
  };

  const path = location.pathname;
  return (
    <Wrapper>
      {path !== "/write-message" && (
        <ContactInfo $bckgImg={bckgImg}>
          <h2>Contactanos</h2>
          <FirstBoxContent>
            <a
              href="https://wa.me/5491158227373"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} /> +54 9 11 5822-7373
            </a>
            <a href="https://maps.app.goo.gl/JYwkki5PhBccy8Vi8" target="_blank">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Guamini 4742, Ciudad Autonoma de Buenos Aires, Villa Lugano.
            </a>
            {/* <a
              href="http://chulosdesign.mitiendanube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStore} />
              Tienda
            </a> */}
          </FirstBoxContent>
          <SocialLinks>
            <a
              href="https://www.instagram.com/chulos.terrazzo?igsh=a3FkcWFnMmVlamR2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=chulos%20wood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.tiktok.com/@chuloswood?_t=8qA2TwKLLnx&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </SocialLinks>
        </ContactInfo>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <p>Escribe un mensaje</p>
        <FormGroup>
          <Label>Nombre</Label>
          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Ingrese su nombre"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <div>
            <input
              type="email"
              name="email_id"
              placeholder="Ingrese su correo"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mensaje">Mensaje</Label>
          <textarea placeholder="Escriba su mensaje" name="mensaje" required />
        </FormGroup>

        <input type="submit" value="Enviar" />
      </form>
      {modalOpen && <ModalForm updateModalOpen={updateModalOpen} />}
    </Wrapper>
  );
};

export default ContactUs;
