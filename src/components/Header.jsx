import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../src/logo.png'; 
import {Link} from 'react-router-dom'; 

function Header(props) {
    return (      
      <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand >
        <Link className='nav-link-logo' to='/' ><img src={Logo} className="headerlogo" alt={"Logo"} /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link' to='/' >Home</Link>
            <Link className='nav-link' to='/login' >Login</Link>
            <Link className='nav-link' to='/register' >Signup</Link>
            <Link className='nav-link' to='/foodworld' >Food World</Link>
            <Link className='nav-link' to="/contact" >Contact Us</Link>
            <Link className='nav-link pos_rel' to='/cart' ><FontAwesomeIcon icon={faCartShopping} /> <span className='cartcountingnav'>0</span></Link>
            <Link className='nav-link' to='/bookingnow' >Booking Now</Link>
          </Nav>
        { props.searchBar?  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>: ""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}


export default Header;