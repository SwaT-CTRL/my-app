import React, { Suspense, lazy } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import Footer from '../Footer';
import Header from '../Header';

const Footer = lazy(()=>import('../Footer'));

const Bookingnow = () => {
  return (
    < > 
        <Header/>
        <div className='headerheightcontrol'></div>

        <Container className='py-5'>

        <Row>
            <Col lg={6}>
            <img src={process.env.PUBLIC_URL + '/images/book.png'} alt="" class="img-fluid bookimgg"/>
            </Col>
            <Col lg={6}>
                <div className="contactheading">Book Now. </div>
                <div className='logininputsec'>
                    <label>Full Name</label>
                    <input placeholder='Full Name' type="text" id="form1" className="logininput" />
                </div>
                <div className='logininputsec'>
                <label>Email ID</label>
                    <input placeholder='Email Id ' type="email" id="form2" className="logininput" />
                </div>
                <div className='logininputsec'>
                <label>No. of People</label>
                    <input placeholder='No. of People' type="number" id="form3" className="logininput" />
                </div>

                <div className='logininputsec'>
                <label>Date</label>
                    <input placeholder='Date' type="date"  id="form3" className="logininput" />
                </div>

                <div className='logininputsec'>
                    <label>Time</label>
                    <input placeholder='Time' type="time" id="form3" className="logininput" />
                </div>
                 

                <div className='d-f a-c j-c'><Button className='contactbtno'>Book Now</Button></div>
            </Col>
        </Row>

    </Container>

        <Suspense fallback='Loading...'>
            <Footer/>
        </Suspense>
    </ >
  )
}

export default Bookingnow