import React, { Suspense, lazy } from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = lazy(()=>import('../Footer'));
const Contact = () => {
  return (
    <>
    <Header/>
    <div className='headerheightcontrol'></div>
    <Container className='py-5'>

        <Row>
            <Col lg={6}>
            <img src={process.env.PUBLIC_URL + '/images/map.jpg'} alt="" class="img-fluid mapjpg"/>
            </Col>
            <Col lg={6}>
                <div className="contactheading">Contact. <br /> Get In Touch</div>
                <div className='logininputsec'>
                    <input placeholder='Full Name' type="text" id="form1" className="logininput" />
                </div>
                <div className='logininputsec'>
                    <input placeholder='Email Id ' type="email" id="form2" className="logininput" />
                </div>
                <div className='logininputsec'>
                    <input placeholder='Subject' type="text" id="form3" className="logininput" />
                </div>
                <div className='logininputsec'>
                    <textarea rows="3" className='logininput' placeholder='Enter Your Message Here'></textarea>
                </div>

                <div className='d-f a-c j-c'><Button className='contactbtno'>Send Message</Button></div>
            </Col>
        </Row>

    </Container>

    <Suspense fallback='Loading...'>
        <Footer/>
    </Suspense>

    </>
  )
}

export default Contact