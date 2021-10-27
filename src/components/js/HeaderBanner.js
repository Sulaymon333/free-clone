import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerBanner.scss';

const HeaderBanner = () => {
    return (
        <div className="header-banner">
            <div className="spacer"></div>
            <div className="info-badge">
                <span className="info-phone">
                    <i className="fas fa-phone-alt"></i>0203 323 45
                </span>
                <a href="mailto:asiakaspalvelu@freelaskutus.fi" className="info-email">
                    <i className="fas fa-envelope"></i>
                    asiakaspalvelu@freelaskutus.fi
                </a>
            </div>
            <ul className="lang-nav">
                <li className="banner-item banner-item-1">
                    <Link to="/">FI</Link>
                </li>
                <li className="banner-item banner-item-2 selected">
                    <Link to="/en">EN</Link>
                </li>
                <li className="banner-item banner-item-3">
                    <Link to="/sv">SV</Link>
                </li>
                <li className="banner-item banner-item-4">
                    <Link to="/ru">RU</Link>
                </li>
            </ul>
            <ul className="auth">
                <li className="auth-signup">
                    <i className="fas fa-user-plus"></i>
                    <Link to="/signup">Signup</Link>
                </li>
                <li className="auth-login">
                    <i className="fas fa-sign-in-alt"></i>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderBanner;
