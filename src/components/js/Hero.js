import React from 'react';

import '../css/hero.scss';

import heroImage from '../../assets/images/free-light-entrepreneurship-the-easy-answer.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <img className="hero-image" src={heroImage} alt="free-light-entrepreneurship-the-easy-answer" />
        </section>
    );
};

export default Hero;
