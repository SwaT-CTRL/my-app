import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Offercard = ({offer}) => {
  return (
    <>
        {offer.map((curElem)=>{
            return(
                <>
                    <Col lg={4} md={6} xs={12} className='px-3' key={curElem.id}>
                        <div className='offer_crd'>
                            <div className='ooferimg'>
                                <img src={curElem.image} className='img-fluid ooferyimg' alt='offerimg'></img>
                            </div>
                            <div className='offery_heading'>{curElem.name}</div>
                            <div className='offersummary'>{curElem.description}</div>                            
                            <Button className='getofferbtn'>Copy Code</Button>
                        </div>
                    </Col>
                
                </>
            )
        })}
    </>
  )
}

export default Offercard