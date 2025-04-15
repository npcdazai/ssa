import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import academy from '../assets/academy.png';
import camps from '../assets/camps.png';
import performance from '../assets/performance.png';
import '../styles/ScrollingText.css';

const Program = () => {
    return (
        <div>
            <Container className="my-5">
                <div style={{ maxWidth: '600px', marginBottom: '30px' }}>
                    <h2 style={{ color: '#003A5D', fontWeight: 'bold' }}>Programs</h2>
                    <p style={{ fontSize: '16px', color: '#000' }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </p>
                    <a href="#" style={{ color: '#003A5D', textDecoration: 'none', fontWeight: '500' }}>
                        Read More →
                    </a>
                </div>

                <Row className="g-4">
                    <Col md={4}>
                        <Card className="text-white border-0" style={{ position: 'relative' }}>
                            <Card.Img src={academy} alt="Academy" style={{ borderRadius: '12px', height: '400px', objectFit: 'cover' }} />
                            <Card.ImgOverlay className="d-flex align-items-end" style={{ borderRadius: '12px' }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }} >
                                    <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Academy</Card.Title>
                                    <Card.Text>Live and train with us</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-white border-0" style={{ position: 'relative' }}>
                            <Card.Img src={camps} alt="Camps" style={{ borderRadius: '12px', height: '400px', objectFit: 'cover' }} />
                            <Card.ImgOverlay className="d-flex align-items-end" style={{ borderRadius: '12px' }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                                    <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Camps</Card.Title>
                                    <Card.Text>Train like a pro with us</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-white border-0" style={{ position: 'relative' }}>
                            <Image src={performance} alt="Performance" style={{ borderRadius: '12px', height: '400px', objectFit: 'cover' }} />
                            <Card.ImgOverlay className="d-flex align-items-end" style={{ borderRadius: '12px' }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }} >
                                    <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Performance</Card.Title>
                                    <Card.Text>Elevate your game with us</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div  className="scroll-container">
                <div className="scroll-content">
                    <span className="scroll-item filled">ADOPT</span>
                    <span className="scroll-item outline">· NURTURE</span>
                    <span className="scroll-item filled">· DELIVER</span>
                    <span className="scroll-item outline">· ADOPT</span>
                    <span className="scroll-item filled">· NURTURE</span>
                    <span className="scroll-item outline">· DELIVER</span>
                    <span className="scroll-item filled">· ADOPT</span>
                    <span className="scroll-item outline">· NURTURE</span>
                    <span className="scroll-item filled">· DELIVER</span>
                </div>
            </div>
        </div>
    );
};

export default Program;
