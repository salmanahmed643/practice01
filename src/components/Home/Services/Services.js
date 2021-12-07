import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <>
            <section className="service_section">
                <Container>
                <div className="text-center">
                    <h1 className="main_section_title"> How to send money </h1>
                </div>

                    <Row xs={1} md={2} lg={3} className="g-5 justify-content-center align-items-center">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;