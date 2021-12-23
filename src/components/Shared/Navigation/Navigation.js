import React from 'react';
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <div className="nav_main_logo">
                <div className="text-center nav_main_logo">
                    <Navbar.Brand href="/" className="nav_logo">Lo<span className="logo_split">Go.</span></Navbar.Brand>
                </div>
                <section className="navbar_bg">
                    <Navbar expand="md">
                        <Container>
                            
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-lg-0 nav_link"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link className="me-5" href="#action1">Home</Nav.Link>
                                    <Nav.Link className="me-5" href="#action2">About</Nav.Link>
                                    <Nav.Link className="me-5" href="#action2">Service</Nav.Link>
                                    <Nav.Link className="" href="#action2">Contact</Nav.Link>
                                </Nav>
                                <Form className="d-flex main_btn">
                                    <Button className="text-capitalize me-3 btn_style">sign up</Button>
                                    <Button className="text-capitalize btn_style signIn_btn">sign in</Button>
                                </Form>
                            </Navbar.Collapse>
                            <Navbar.Toggle aria-controls="navbarScroll" className="nav_toggle" />
                        </Container>
                    </Navbar>
                </section>
            </div>
        </>
    );
};

export default Navigation;