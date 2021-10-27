import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.scss';

import Logo from '../../assets/images/free-kevytyrittaja-logo.svg';

const Header = () => {
    const handleMenuBtn = () => {
        console.log('button-clicked');
    };
    return (
        <header className="header-section">
            <div className="container-lg">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="Freelaskutus logo" />
                    </div>
                </Link>

                <nav className="navigation">
                    <button className="hamburger" onClick={handleMenuBtn}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <ul className="nav-list">
                        <li className="nav-item nav-item-1">
                            <Link to="/">Pricing</Link>
                        </li>
                        <li className="nav-item nav-item-1">
                            <Link to="/">Light entrepreneur</Link>
                        </li>
                        <li className="nav-item nav-item-1">
                            <Link to="/">Getting Started</Link>
                        </li>
                        <li className="nav-item nav-item-1">
                            <Link to="/">Customer service</Link>
                        </li>
                        <li className="nav-item nav-item-1">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
