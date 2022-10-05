import React,{useState, Suspense, lazy} from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import {  Container, Row } from 'react-bootstrap';
import Offermenu from '../Api/Offerapi';
import Offercard from '../Cards/Offercard';
const Footer = lazy(()=>import("../Footer"));


const Offers = () => {
    const [offer, setOffer] = useState(Offermenu)
  return (
    <>
    <Header/>
    <div className='headerheightcontrol '></div>
        <div className='offer_firstsec d-f flexdirection a-c j-c'>
            <Container className='d-f flexdirection a-c j-c'>
                <img src={process.env.PUBLIC_URL + '/images/offerob.png' } className='offerrobimg'/>
                <h2 className='offerheading'>Get Discount or Bonus Item while Ordering</h2>
                <div className='offersubhead text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sit unde odio eum, blanditiis expedita fugit rerum sint sequi fuga, similique omnis corporis voluptatem iure officiis incidunt tenetur, nihil asperiores.</div>
            </Container>
        </div>

        <div className='offersectwo py-5'>
            <Container>
                <Row>
                    <Offercard offer={offer}/>
                </Row>
            </Container>
        </div>
    <Suspense fallback='Loading...'>
        <Footer/>
    </Suspense>

    </>
  )
}

export default Offers