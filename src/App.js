import React from 'react';

import './components/js/HeaderBanner';
import HeaderBanner from './components/js/HeaderBanner';
import Hero from './components/js/Hero';
import Header from './components/js/Header';
import LightEntrepreneur from './components/js/LightEntrepreneur';
import BecomeLightEntrepreneur from './components/js/BecomeLightEntrepreneur';
import Footer from './components/js/Footer';

function App() {
    return (
        <div className="App">
            <HeaderBanner />
            <Header />
            <Hero />
            <LightEntrepreneur />
            <BecomeLightEntrepreneur />
            <Footer />
        </div>
    );
}

export default App;
