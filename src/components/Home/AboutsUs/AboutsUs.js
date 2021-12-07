import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './AboutsUs.css'
import aboutImg01 from '../../../images/aboutImg01.jpg';
import About from '../About/About';

const AboutsUs = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect( () => {
        fetch('./aboutus.json')
        .then(res => res.json())
        .then(data => setAbouts(data))
    }, []);
    return (
        <>
            <section className="common_section about_section">
                <Container>
                    <Row className="justify-content-center align-items-center g-5">
                        <div className="col-12 col-lg-6 text-center about_img overflow-hidden">
                            <img src={aboutImg01} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div>
                                <h1 className="main_section_title"> How does it work </h1>
                                <Row className="justify-content-center align-items-center">
                                    {
                                        abouts.map(about => <About
                                            key={about.number}
                                            about={about}
                                        ></About>)
                                    }
                                </Row>
                            </div>
                            <div className="d-flex main_btn justify-content-center mt-5">
                                    <Button className="text-capitalize btn_style signIn_btn fw-bold"> More Info </Button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutsUs;