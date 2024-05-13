import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://praktiko1.s3.amazonaws.com/story-online.png" alt="ONLINE STORE ECUADOR" />
                <h1 className="header__title">Online Store Ecuador</h1>
            </div>
            <div className="header__cart">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "Cerrar" : "Menú"}
                </button>
                <span className="header__timer">0.00 s</span>
            </div>
        </header>
    );
}

export default Header;
