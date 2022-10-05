import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import {FaFacebookF} from 'react-icons/fa';
import{BsTwitter} from 'react-icons/bs';
import{BsGoogle} from 'react-icons/bs';
import{BsLinkedin} from 'react-icons/bs';
import{BsPinterest} from 'react-icons/bs';
import {Link} from 'react-router-dom'; 

const Footer = () => {
  return (
    <>
        <div className="page-footer font-small  food_footer">
            <Container>
                <Row className='text-center d-flex justify-content-center pt-5 mb-3'>
                    <Col md={2} className="mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <Link to="/aboutus" className='text-white'>About us</Link>
                        </h6>
                    </Col>

                    <Col md={2} className="mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to="/foodworld" className='text-white'>Foodworld</Link>
                        </h6>
                    </Col>

                    <Col md={2} className="mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <Link to="/offers" className='text-white'>Offers</Link>
                        </h6>
                    </Col>

                    <Col md={2} className="mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <Link to="/help" className='text-white'>Help</Link>
                        </h6>
                    </Col>

                    <Col md={2} className="mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to="/contact" className='text-white'>Contact</Link>
                        </h6>
                    </Col>
                </Row>

                <hr className='foothr' /> 

                <Row className='d-flex text-center justify-content-center mb-md-0 mb-4'>
                    <Col md={8} sm={12} className="mt-5 text-white">
                        <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </Col>
                </Row>

                <div className='d-f j-c news_lettersecto'>
                    <div className='newy_letmainsec d-f'>
                        <input type="text" className="new_letter_input flexone" placeholder="Email ID"  / >
                        <button className="news_lette_btno">Subscribe</button>
                    </div>
                </div>

                <div className='pb-3 mb-5 d-f j-c footy_social_linksc flexwrap'>
                    <a href='#a'><FaFacebookF /></a>
                    <a href='#a'><BsTwitter /></a>
                    <a href='#a'><BsGoogle /></a>
                    <a href='#a'><BsLinkedin /></a>
                    <a href='#a'><BsPinterest /></a>
                </div>
            </Container>
            <div className='footer-copyright text-center py-3'>© 2020 Copyright:
            <a href="#asd"> foody_world.com</a></div>
        </div>
    </>
  )
}

export default Footer