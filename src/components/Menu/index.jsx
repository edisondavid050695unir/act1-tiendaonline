import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  // Asegúrate de incluir el archivo de estilos CSS

const Menu = () => {
    return (
        <div className="menu-container">
            <nav className="menu">
                <Link className="menu__link" to="/">HOME</Link>
                <Link className="menu__link" to="/shop">PRODUCTOS</Link>
                <Link className="menu__link" to="/blog">BLOG</Link>
                <Link className="menu__link" to="/contact">CONTACTO</Link>
            </nav>
        </div>
    );
}

export default Menu;