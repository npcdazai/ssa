import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const features = [
    "First venue in the world",
    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis academy in Asia Pacific"
]

const KeyFeatures = () => {
    const midIndex = Math.ceil(features.length / 2);
    const firstHalf = features.slice(0, midIndex);
    const secondHalf = features.slice(midIndex);
    return (
        <div className='container' style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div className="flex" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <h1 className='mid' style={{ fontSize: "36px", color: "#003A5D" }} >key Features</h1>
                <p className='Matter' style={{ fontSize: "16px", color: "#000000" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <Row style={{ alignItems: "center" }}>
                <Col md={6}>
                    {firstHalf.map((feature, index) => (
                        <div className="d-flex align-items-start mb-3" key={index}>
                            <FaArrowRight className="me-2 text-primary mt-1" />
                            <span className='Matter' style={{ fontSize: "16px" }} >{feature}</span>
                        </div>
                    ))}
                </Col>
                <Col md={6}>
                    {secondHalf.map((feature, index) => (
                        <div className="d-flex align-items-start mb-3" key={index}>
                            <FaArrowRight className="me-2 text-primary mt-1" />
                            <span className='Matter' style={{ fontSize: "16px" }} >{feature}</span>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}

export default KeyFeatures
