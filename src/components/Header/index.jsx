import React from 'react';
import './Header.css';
import { CartItem } from "../../components";

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://praktiko1.s3.amazonaws.com/story-online.png" alt="ONLINE STORE ECUADOR" />
                <h1 className="header__title">Online Store Ecuador</h1>
            </div>
            <div className="header__cart">
            <CartItem itemCount={3} totalPrice={150.00} />
            </div>
        </header>
    );
}

export default Header;
