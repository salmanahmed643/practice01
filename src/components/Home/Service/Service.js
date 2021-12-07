import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const { title, icon, info} = service;
    return (
        <>
            <Col className="">
                <Card className="py-4 px-2 service_card text-center">
                    <div className="text-center">
                        <i className={`iconAwesome ${icon}`}></i>
                    </div>
                    <Card.Body>
                    <Card.Title>
                        <h1 className="main_title">{title}</h1>
                    </Card.Title>
                    <Card.Text>
                        <p className="main_info">{info}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;