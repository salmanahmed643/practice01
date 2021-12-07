import React from 'react';
import './About.css'

const About = ({about}) => {
    const {number, title, des} = about;
    return (
        <>
            <div className="col-1">
                <span className="number d-flex justify-content-center align-items-center">{number}</span>
            </div>
            <div className="col-11 ps-5 about_card">
                <h3 className="about_title mt-5"> {title} </h3>
                <p className="main_title m-0">{des}</p>
            </div>
        </>
    );
};

export default About;