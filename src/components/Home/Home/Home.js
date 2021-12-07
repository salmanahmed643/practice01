import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../../Home/Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <>
            <Navigation/>
            <Banner/>
            <HowItWorks/>
        </>
    );
};

export default Home;