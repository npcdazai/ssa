import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import footerImg from "../assets/Footer.png";

const navItems = [
    "About Us", "Coaches", "News", "Matches", "Events", "FAQs", "Programs", "Amenities", "Blogs"
];

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#fff",  borderTop: "1px solid #ddd" }}>
            <Container style={{padding: "2rem 0",}}>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0 text-md-start text-center">
                        <Image src={footerImg} height="107" width="150" alt="SSA Logo" />
                    </Col>

                    <Col md={8} >
                        <div style={{ display: "flex", justifyContent: "space-evenly" }} >
                            {navItems.map((item, index) => (
                                <Col key={index} xs="auto" className="text-center mb-2 mid" style={{ fontSize: "14px" }}>
                                    {item}
                                </Col>
                            ))}
                        </div>
                        <hr style={{ margin: "1rem 0" }} />
                        <Row className="justify-content-between mb-3" >
                            <Col md={4} className="mb-3 mb-md-0">
                                <h6 style={{ color: "#002F50" }} className="fw-bold mb-2 mid">Signature Slam Academy</h6>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <p style={{ fontSize: "14px", paddingTop: "1rem" }}>
                                        <GoLocation className="me-2" />
                                        30 Wills Hill Road, Lovedale, NSW
                                    </p>
                                    <p style={{ fontSize: "14px" }}>
                                        <FaPhoneAlt className="me-2" />
                                        +91 9564258752
                                    </p>
                                    <p style={{ fontSize: "14px" }}>
                                        <HiOutlineMail className="me-2" />
                                        info@ssagroup.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={4} className="text-md-start text-center">
                                <h6 style={{ color: "#002F50" }} className="fw-bold mb-2 mid">Connect with us</h6>
                                <div style={{ marginTop: "1rem" }} className="d-flex gap-3 justify-content-md-start justify-content-center">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                {/* Navigation Items */}

            </Container>
            <footer style={{ background: 'linear-gradient(to right, #0a436c, #1f4634)', padding: '10px 0', color: '#ffffff', fontSize: '12px' }}>
                <Container fluid>
                    <Row className="text-center">
                        <Col md={4} className="text-md-start mb-2 mb-md-0">
                            <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none' }}>Terms And Condition</a>
                        </Col>
                        <Col md={4}>
                            © 2023 All Rights Reserved www.signaturestreamacademy.com
                        </Col>
                        <Col md={4} className="text-md-end">
                            <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
