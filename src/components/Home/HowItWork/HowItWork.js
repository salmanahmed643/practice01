import React from 'react';
import './HowItWork.css'

const HowItWork = ({work}) => {
    const {title, info, icon} = work;
    console.log(work)
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 text-center work_info">
                <i className={`fontAwsome_style ${icon}`}></i>
                <h1 className="main_title">{title}</h1>
                <p className="main_info">{info}</p>
            </div>
        </>
    );
};

export default HowItWork;