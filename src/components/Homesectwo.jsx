import React, {useState} from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import OwlCarousel from 'react-owl-carousel2';
 import '../../node_modules/react-owl-carousel2/lib/styles.css';
 import '../../node_modules/react-owl-carousel2/src/owl.theme.default.css';
import Menu from './Api/Homeslideritem_api';
import Homeslidercard  from './Cards/Homeslidercard';

const Homesectwo = () => {

const [menuData] = useState(Menu);

const options = {
    items: 4,
    loop: true, 
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        } 
    },
  };

return (
    <div className='homesectwo py-5'>
            <Container className='hsectwo_container'>
                   <Row>
                        <Col lg={6} >
                            <h2 className='hsectwo_heading text-left'>
                                Some Top Dishes From Our Restaurant!
                            </h2> 
                        </Col>

                        <Col lg={6}>
                            <div className='hsctwo_subhead text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div>
                        </Col>

                        <Col lg={12} className="pt-5">
                       
                            <OwlCarousel className='owl-theme owl-carousel owl' options={options} >

                                 <Homeslidercard menuData={menuData}/>

                            </OwlCarousel>

                        </Col>

                   </Row>
                   
            </Container>
    </div>
    
  )
}

export default Homesectwo;