import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer_section">
                <Container>
                    <Row xs={1} md={3} >
                        <Col className="d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="footer_title"> Service </h3>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="footer_title"> Company </h3>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="footer_title"> Follow Us </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Footer;