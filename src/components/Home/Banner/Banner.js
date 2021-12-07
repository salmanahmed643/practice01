import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css';
import paymentImage01 from '../../../images/payimg01.jpg';

const Banner = () => {

   
    return (
        <>
            <section className="banner_bg mt-5">
                <Container>
                    <div className="main_hero_container mt-5">
                        <Row className="d-flex justify-content-center align-items-center g-5">
                            <div className="col-12 col-md-6 banner_left_side">
                                <h1 className="main_title text-capitalize">
                                    simple online payment <br />
                                    made easy for you
                                </h1>
                                <p className="main_dec_para my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam quia, minus repellendus vitae quae, voluptate nemo quis itaque commodi id? Deleniti blanditiis nobis asperiores ipsa quae totam fuga eveniet architecto accusantium eaque nisi magni similique officiis perferendis nulla excepturi error beatae incidunt maxime recusandae, quisquam voluptatum animi? Laborum, adipisci!
                                </p>
                                <h3 className="get_early fw-bold mt-5">Get early access </h3>
                                <div className="input_group mt-5 d-flex justify-content-center align-items-center">
                                    <input type="text" placeholder="Enter your Email" className="rounded-pill w-75 py-2 px-3 form_control_text ps-5" />
                                    <div className="input_group_button">
                                        Get it Now
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <div className="payment_img">
                                    <img src={paymentImage01} alt="" />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Banner; 