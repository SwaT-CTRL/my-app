import React,{useState} from 'react';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';


export default function Firstsection() { 

const [inpval, setInpval] = useState('');

const navigate = useNavigate();

const handleChange = event => {
  setInpval(event.target.value);

  console.log('typing here', event.target.value);
};

const handleClick = event => {
  event.preventDefault();
  navigate('/searchresult');

    // 👇️ value of input field
    console.log('clicked value =', inpval);

}; 
  
  return (
    <div className='fistsec_main d-f flexdirection pos_rel'>
         <Container className='my-auto'>
            <Row>
              <Col lg={6} className="header_col pos_rel">                
                <div className='foodheadeffect'>
                  Food
                </div>

                <div className='headercontentsec text-left'>

                    <div className='headerheading '>Your Favourite Food Delivered Hot & Fresh</div>
                    <div className='header_subhead text-left'>Healthy Switcher chefs do all the prep work, like peeding, chopping & marinating, so you can eat the delicious food.</div>

                    <form className='food_headersearchsec d-f'>
                      
                      <input type="text" placeholder="Search Food" className="headerinpt"
                      id="inpval"
                      name="inpval"
                      onChange={handleChange}
                      value={inpval}  />
                      
                      <button className="headerbtn" onClick={handleClick}>Order Now</button>

                    </form>
                </div>

              </Col>
               
            </Row>
         </Container>

    </div>
  )
}
