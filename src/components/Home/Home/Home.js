import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../../Home/Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import AboutsUs from '../AboutsUs/AboutsUs';

const Home = () => {
    return (
        <>
            <Navigation/>
            <Banner/>
            <HowItWorks/>
            <AboutsUs/>
        </>
    );
};

export default Home;