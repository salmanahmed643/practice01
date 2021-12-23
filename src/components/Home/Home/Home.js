import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../../Home/Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import AboutsUs from '../AboutsUs/AboutsUs';
import Services from '../Services/Services'
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <Navigation/>
            <Banner/>
            <HowItWorks/>
            <AboutsUs/>
            <Services/>
            <Contact/>
        </>
    );
};

export default Home;