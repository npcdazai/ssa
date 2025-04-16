import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import straks from '../assets/darktenis.png';
import trans from '../assets/trans.png';

const Banners = () => {
  return (
    <div className='bannerTop'>
      <Row className="gx-0">
        {/* Left Banner */}
        <Col md={6} className="position-relative">
          <Image
            src={straks}
            alt="Our Coaches"
            fluid
            style={{ height: '278px', objectFit: 'cover', width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            <h3 className='boldMatter' style={{ fontWeight: 'bold' }}>Our Coaches</h3>
            <p className='Matter' style={{ maxWidth: '250px' }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='Matter'  style={{ color: 'white' }}>
              Read More →
            </p>
          </div>
        </Col>

        <Col
          md={6}
          className="d-flex align-items-center"
          style={{
            backgroundImage: `url(${trans})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '278px',
            color: '#0e2f63',
          }}
        >
          <div style={{ marginLeft: '10%' }}>
            <h4 className='boldMatter' style={{ fontWeight: 'bold' }}>Events</h4>
            <p className='Matter' style={{ maxWidth: '250px' }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='Matter'  style={{ color: '#0e2f63' }}>
              Read More →
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banners;
