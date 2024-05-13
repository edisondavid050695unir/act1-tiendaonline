// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';  // Asegúrate de crear este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h2 className="footer__logo">Online Store Ecuador</h2>
                    <p>Dirección: 60-49 Road 11378 Ecuador</p>
                    <p>Teléfono: +593 979007892</p>
                    <p>Correo electrónico: ventasonlineEcuador@gmail.com</p>
                </div>
                <div className="footer__section">
                    <h3 className="footer__title">Enlaces de interés</h3>
                    <ul className="footer__links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
                </div>
                <div className="footer__section">
                    <h3 className="footer__title">Suscríbete a nuestro boletín ahora</h3>
                    <p>Reciba actualizaciones por correo electrónico sobre nuestra última tienda y ofertas especiales.</p>
                    <form className="footer__form">
                        <input type="email" placeholder="Escribe tu email ..." className="footer__input" />
                    </form>
                    <form className="footer__form__button">
                        <button type="submit" className="footer__button">SUBSCRIBIR</button>
                    </form>
                    <div className="footer__social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
