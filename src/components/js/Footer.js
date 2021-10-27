import React from 'react';
import { Link } from 'react-router-dom';

import '../css/footer.scss';

import footerLogo from '../../assets/images/free-kevytyrittaja-logo.svg';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-top">
                <div className="container-center">
                    <div className="footer-logo-box">
                        <img src={footerLogo} alt="freekevyt yrittäjä logo" />
                    </div>
                    <div className="contact-us">
                        <h3 className="title-head">Contact us</h3>
                        <div className="customer-service">
                            <h4 className="title">Customer service</h4>
                            <p className="list-item">+358 (0) 203 323 45</p>
                            <p className="list-item">asiakaspalvelu@freelaskutus.fi</p>
                        </div>

                        <div className="sales">
                            <h4 className="title">Sales</h4>
                            <p className="list-item">+358 (0) 203 323 46</p>
                            <p className="list-item">myynti@freelaskutus.fi</p>
                        </div>
                        <div className="office">
                            <h4 className="title">Office</h4>
                            <p className="list-item">Free-Laskutus Oy</p>
                            <p className="list-item">Perhonkatu 6 A, 4th floor</p>
                            <p className="list-item">00100 Helsinki</p>
                        </div>
                    </div>
                    <div className="free-Kevytyrittaja">
                        <h3 className="title-head">Free-Kevytyrittäjä</h3>
                        <ul className="list">
                            <li className="list-item">
                                <Link to="/">Pricing</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">Be a light entrepreneur</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">Light entrepreneur</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">Getting started</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">YEL</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">Customer service</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container-center">
                    <ul className="list">
                        <li className="list-item">&copy; Free-Laskutus Oy</li>
                        <li className="list-item">|</li>
                        <li className="list-item"> 0203 323 45</li>
                        <li className="list-item">|</li>
                        <li className="list-item">asiakaspalvelu@freelaskutus.fi</li>
                    </ul>

                    <div className="social-media-icons">
                        <li className="list-item">
                            <a href="https://www.facebook.com/freelaskutus/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="https://twitter.com/freelaskutus" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="https://www.facebook.com/freelaskutus/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li className="list-item">
                            <a
                                href="https://www.instagram.com/freekevytyrittaja/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
