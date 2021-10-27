import React from 'react';

import { Link } from 'react-router-dom';

import logoText from '../../assets/images/free-kevytyrittaja-text.svg';

import '../css/becomeLightEntrepreneur.scss';

const BecomeLightEntrepreneur = () => {
    return (
        <section className="become-light-entrepreneur">
            <div className="container-medium">
                <div className="logo-box">
                    <img src={logoText} alt="freekevytyrittäjä logo text" className="logo-text" />
                </div>
                <div className="text-box">
                    <h1 className="title">Try to be a light entrepreneur</h1>
                    <p className="description">Signing up is free and easy. You pay only as you go.</p>
                </div>
                <Link to="/be-a-light-entrepreneur" className="cta-btn-lg">
                    Be a light entrepreneur
                </Link>
                <div className="contact-box">
                    <h2 className="got-question">Questions? We have answers!</h2>
                    <p className="contact-info">asiakaspalvelu@freelaskutus.fi / +358 (0) 203 323 45</p>
                </div>
            </div>
        </section>
    );
};

export default BecomeLightEntrepreneur;
