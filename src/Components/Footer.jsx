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
        <div style={{ backgroundColor: "#fff", borderTop: "1px solid #ddd" }}>
            <Container className='oii'>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="mb-3 mb-md-0 text-center text-md-start">
                        <Image src={footerImg} height="107" width="150" alt="SSA Logo" />
                    </Col>

                    <Col xs={12} md={8}>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-evenly">
                            {navItems.map((item, index) => (
                                <div key={index} className="text-center mb-2 px-2" style={{ fontSize: "14px", minWidth: "100px" }}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <hr style={{ margin: "1rem 0" }} />

                        <Row className="text-center text-md-start">
                            <Col xs={12} md={4} className="mb-4 mb-md-0">
                                <h6 style={{ color: "#002F50" }} className="fw-bold mb-2">Signature Slam Academy</h6>
                                <div style={{ fontSize: "14px" }}>
                                    <p className="d-flex align-items-start justify-content-center justify-content-md-start gap-2 pt-3">
                                        <GoLocation />
                                        <span>30 Wills Hill Road, Lovedale, NSW</span>
                                    </p>
                                    <p className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                                        <FaPhoneAlt />
                                        <span>+91 9564258752</span>
                                    </p>
                                    <p className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                                        <HiOutlineMail />
                                        <span>info@ssagroup.com</span>
                                    </p>
                                </div>
                            </Col>

                            <Col xs={12} md={4} className="text-center text-md-start">
                                <h6 style={{ color: "#002F50" }} className="fw-bold mb-2">Connect with us</h6>
                                <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <footer style={{
                background: 'linear-gradient(to right, #0a436c, #1f4634)',
                padding: '10px 0',
                color: '#ffffff',
                fontSize: '12px'
            }}>
                <Container fluid>
                    <Row className="text-center text-md-start align-items-center">
                        <Col xs={12} md={4} className="mb-2 mb-md-0">
                            <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none' }}>Terms And Condition</a>
                        </Col>
                        <Col xs={12} md={4} className="mb-2 mb-md-0 text-center">
                            © 2023 All Rights Reserved www.signaturestreamacademy.com
                        </Col>
                        <Col xs={12} md={4} className="text-md-end text-center text-md-end">
                            <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
