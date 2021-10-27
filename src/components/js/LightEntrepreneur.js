import React from 'react';
import { Link } from 'react-router-dom';

import '../css/light-entrepreneur.scss';

import imageLeft from '../../assets/images/mita-on-kevytyrittajys.jpg';
import imageRight from '../../assets/images/enemman-palkkaa-kevytyrittajana.jpg';

const LightEntrepreneur = () => {
    return (
        <section className="light-entrepreneur-section">
            <div className="container-center">
                <div className="section-top">
                    <div className="image-left">
                        <img src={imageLeft} alt="what is light entrepreneurship" />
                    </div>

                    <div className="info">
                        <h1 className="title">What is light entrepreneur?</h1>
                        <div className="description">
                            <p className="text description-1">
                                Light entrepreneurship is a form of employment that counts your customers for work done
                                without you having to set up your own business or send your tax card to a large number
                                of employers.
                            </p>

                            <p className="text description-2">
                                With the Free-Kevytyrittäjä, light entrepreneurs are avoiding bureaucracy brought up by
                                your own company so that you can focus on the essentials, that is, your own work.
                            </p>
                        </div>

                        <Link to="/more-light-entrepreneurship" className="cta-btn">
                            More about light entrepreneurship
                        </Link>
                    </div>
                </div>

                <div className="section-bottom">
                    <div className="info">
                        <h1 className="title">Earn more as a light entrepreneur</h1>
                        <div className="description">
                            <p className="text description-1">
                                Light entrepreneurship is a form of employment that counts your customers for work done
                                without you having to set up your own business or send your tax card to a large number
                                of employers.
                            </p>

                            <p className="text description-2">
                                With the Free-Kevytyrittäjä, light entrepreneurs are avoiding bureaucracy brought up by
                                your own company so that you can focus on the essentials, that is, your own work.
                            </p>
                        </div>
                        <Link to="/see-how-you-would-earn" className="cta-btn">
                            See how much you can earn
                        </Link>
                    </div>

                    <div className="image-left">
                        <img src={imageRight} alt="what is light entrepreneurship" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LightEntrepreneur;
