import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import {
  FaGolfBall,
  FaHotel,
  FaPlane,
  FaCity,
  FaSchool,
  FaHospital,
  FaHamburger
} from 'react-icons/fa';
import straks from "../assets/straks.png";

const connectivityData = [
  { icon: <FaGolfBall className="me-2 text-light" />, name: 'Hunter Valley Golf And Country Club', distance: '220m' },
  { icon: <FaHotel className="me-2 text-light" />, name: 'Rydges Resort Hunter Valley', distance: '550m' },
  { icon: <FaPlane className="me-2 text-light" />, name: 'Cessnock Airport', distance: '1.7km' },
  { icon: <FaCity className="me-2 text-light" />, name: 'Cessnock CBD', distance: '7km' },
  { icon: <FaSchool className="me-2 text-light" />, name: 'Nulkaba Public School', distance: '4.8km' },
  { icon: <FaHospital className="me-2 text-light" />, name: 'Cessnock Hospital', distance: '7.3km' },
  { icon: <FaHamburger className="me-2 text-light" />, name: 'McDonald’s, KFC, Oporto', distance: '7km' },
];

const ConnectivitySection = () => {
  return (
    <Container fluid className="p-0">
      <Row className="gx-0 flex-column flex-md-row">
        <Col
          xs={12}
          md={5}
          className="d-flex flex-column justify-content-center px-4 px-md-5 py-5"
          style={{
            background: 'linear-gradient(to top, #173931 0%, #003A5D 100%)',
            color: 'white',
          }}
        >
          <h6 className="text-uppercase mid mb-3" style={{ fontSize: "22px", color: "#fff" }}>
            Launching
          </h6>
          <h2 className="fw-bold mb-3 boldMatter" style={{ lineHeight: '1.3' }}>
            Signature Slam Academy <br /> Hunter Valley
          </h2>
          <h5 className="mb-3 Matter">SSA Connectivity</h5>
          <ListGroup variant="flush">
            {connectivityData.map((item, idx) => (
              <ListGroup.Item
                key={idx}
                className="border-0 ps-0 Matter d-flex justify-content-between align-items-center"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '1rem',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem'
                }}
              >
                <span className="d-flex align-items-center">
                  {item.icon}
                  {item.name}
                </span>
                <strong>{item.distance}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Right Column */}
        <Col xs={12} md={7}>
          <div style={{ height: '100%', maxHeight: '100vh', overflow: 'hidden' }}>
            <Image
              src={straks}
              alt="Hunter Valley"
              fluid
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                maxHeight: '600px' // for small devices
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConnectivitySection;
