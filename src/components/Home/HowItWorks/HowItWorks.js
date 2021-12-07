import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HowItWork from '../HowItWork/HowItWork';
import './HowItWorks.css'

const HowItWorks = () => {
    const [works, setWorks] = useState([]);
    useEffect( () => {
        fetch('./howitwork.json')
        .then(res => res.json())
        .then(data => setWorks(data))
    }, []); 
    return (
        <>
            <section className="howIt_bg">
                <Container>
                    <div className="text-center"><h1 className="main_section_title"> How does it work </h1></div>
                    <Row className="work_cart justify-content-center align-items-center g-5">
                        {
                            works.map(work => <HowItWork
                                key={work.id}
                                work={work}
                            ></HowItWork>)
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HowItWorks;