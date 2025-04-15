import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import badminton from "../assets/badminton.png"
import court from "../assets/court.png"

const Glimples = () => {
    return (
        <Container>
            <div className="flex" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <h1 className='mid' style={{ fontSize: "36px", color: "#003A5D" }} >A Glimpse of Excellence</h1>
                <p className='Matter' style={{ fontSize: "16px", color: "#000000" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <Row className="g-3">
                <Col md={4}>
                    <Image src={badminton} alt="Badminton Glimpse 1" fluid style={{ height: '462px', objectFit: 'cover', width: '100%' , borderRadius:"10px"  }} />
                </Col>
                <Col md={8}>
                    <Image src={court} alt="Badminton Glimpse 2" fluid style={{ height: '462px', objectFit: 'cover', width: '100%' , borderRadius:"10px" }} />
                </Col>
            </Row>
        </Container >
    )
}

export default Glimples
