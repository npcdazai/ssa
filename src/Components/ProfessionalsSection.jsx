import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import whiteperson from "../assets/white.png"
import whiteperson1 from "../assets/white1.png"
import whiteperson2 from "../assets/white2.png"

const professionals = [
    {
        name: 'Craig Tiley',
        title: 'CEO Tennis Australia & Australian Open',
        image: whiteperson
    },
    {
        name: 'Stephen Farrow',
        title: 'Director - Tournaments, Players & International Relations',
        image: whiteperson1
    },
    {
        name: 'Cameron Pearson',
        title: 'Head Major Events - Tennis Australia',
        image: whiteperson2
    },
];

const ProfessionalsSection = () => {
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 style={{fontSize:"36px" , color:"#003A5D"}} className="fw-bold boldMatter">Meet our professionals</h4>
                    <p className="text-muted Matter " style={{ maxWidth: '400px' , fontWeight:100}}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <Button variant="link" className="text-decoration-none">
                    View All &rarr;
                </Button>
            </div>

            <Row>
                {professionals.map((pro, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="border-0 text-start">
                            <Card.Img variant="top" src={pro.image} className="rounded" />
                            <Card.Body>
                                <Card.Title style={{color:"#003A5D" , fontSize:"25px"}} className="fw-semibold mid">{pro.name}</Card.Title>
                                <i><Card.Text style={{fontSize:"16px"}} className="text-muted Matter">{pro.title}</Card.Text></i>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProfessionalsSection;
