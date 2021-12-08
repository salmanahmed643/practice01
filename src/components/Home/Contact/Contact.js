import React from 'react';
import {Container, Form, Row, Button } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        <>
            <section className="contact_section">
                <Container>
                    <div className="text-center"><h1 className="main_section_title"> Get in touch </h1></div>
                    <Form className="contact_form d-flex justify-content-center align-items-center flex-column">
                        <Row className="mb-3 col-12 col-lg-6">
                            <Form.Group controlId="formGridEmail" className="w-50 mb-4">
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className="w-50 mb-4">
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>


                            <Form.Group className="mb-4" controlId="formGridAddress1">
                                <Form.Control placeholder="Country" />
                            </Form.Group>
                            <Form.Control
                            as="textarea"
                            placeholder="Enter your message"
                            style={{ height: '100px' }}
                            />

                            <div className="main_btn mt-5 text-end">
                                <Button className="text-capitalize me-3 btn_style">Submit</Button>
                            </div>
                        </Row>
                    </Form>
                </Container>
            </section>  
        </>
    );
};

export default Contact;