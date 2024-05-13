import React from 'react';
import './Contact.css';  // Asegúrate de tener este archivo para tus estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormContact } from "../../components";
const Contact = () => {
  return (
        <div className="contact-container">
        <div className="info-container">
            <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h4>Teléfono</h4>
            <p>+593 979007892</p>
            </div>
            <div className="contact-info">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <h4>Dirección</h4>
            <p>60-49 Road 11378 Ecuador</p>
            </div>
            <div className="contact-info">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h4>Atención</h4>
            <p>10:00 am to 23:00 pm</p>
            </div>
            <div className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h4>Correo Electronico</h4>
            <p>ventasonlineEcuador@gmail.com</p>
            </div>
        </div>
        <FormContact/>
        </div>
  );
};

export default Contact;
