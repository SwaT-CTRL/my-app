import React, { useState, Suspense, lazy } from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import { Button, Col, Container ,Table} from 'react-bootstrap';
import {FiEdit} from 'react-icons/fi';
import Checoutordermenu from '../Api/Checkoutorderapi';
import Checkouttd from '../Cards/Checkouttd';
import {Link} from 'react-router-dom'; 
import Modal from 'react-bootstrap/Modal';
const Footer = lazy(()=>import('../Footer'));


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Shiping Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='logininputsec'>
            <input placeholder='Enter Fullname ' type="text"   className="logininput" />
        </div>

        <div className='logininputsec'>
            <input placeholder='Enter Address ' type="text"   className="logininput" />
        </div>

        <div className='logininputsec'>
            <input placeholder='Enter EmailID ' type="text"   className="logininput" />
        </div>

        <div className='logininputsec'>
            <input placeholder='Enter Mobile No. ' type="text"   className="logininput" />
        </div>
           
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Save</Button>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Checkout = () => {
    const [checkoutOrderMenu] = useState(Checoutordermenu);
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Header/>
    <div className='headerheightcontrol'></div>
    <Container className='py-5'>
        <div className='food_wordcard'>
            <div className='cart_heading'></div>
            <div className='d-f flexwrap'>
                <Col  className='px-2' lg={6} xs={12}>
                    <div className='checkouthead d-f a-c'>Shipping Details  <Button className="shipydetbtn ms-auto" onClick={() => setModalShow(true)}> <FiEdit/> </Button></div>
                    
                    <div className="checkot_addresssec mb-4">
                    
                        <div className="d-f a-c ckaddet">
                            
                            <div className="flexone">Daneil  Hecker</div>

                            daneil@bombora.com

                        </div>

                        <div className="d-f a-c ckaddet">
                            
                            <div className="flexone">Vasagatan 16</div>                         

                        </div>

                        <div className="d-f a-c ckaddet">
                            
                            <div className="flexone">111 20 Stockholm</div>                         

                        </div>

                        <div className="d-f a-c ckaddet">
                            
                            <div className="flexone">Sweden</div>                         

                        </div>

                    </div>

                    <div class="checkouthead d-f a-c">
                        Payment Details                    
                    </div>

                    <div className='logininputsec'>
                        <input placeholder='Name on Card ' type="text" id="form1" className="logininput" />
                    </div>
                    <div className='logininputsec'>
                        <input placeholder='Card Number ' type="text" id="form1" className="logininput" />
                    </div>
                    <div className='logininputsec'>
                        <input placeholder='Valid Through ' type="text" id="form1" className="logininput" />
                    </div>
                    <div className='logininputsec'>
                        <input placeholder='CVC Code' type="text" id="form1" className="logininput" />
                    </div>

                    <Link className='crtsumchecbtn my-4 d-f j-c a-c' to='/thankyou'>Checkout</Link>
                    

                </Col>

                <Col className='px-2' lg={6} xs={12}>
                    <div className='checkouthead d-f a-c'>Your Order  </div>

                    <Table responsive="lg" className='carttable'   hover>
                            <thead>
                            <tr>                           
                                <th> Food Item</th>
                                <th className='text-center'>No. of Item</th>
                                <th className='text-center'>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                <Checkouttd checkoutOrderMenu={checkoutOrderMenu}/>
                            </tbody>
                         </Table>

                         <div className="d-f a-c ckaddet">
                        
                                <div className="flexone">Sub Total</div>

                                5000

                         </div>

                        <div className="d-f a-c ckaddet">
                                
                                <div className="flexone">Shipping</div>

                                50

                        </div>

                        <div className="d-f a-c ckaddet">
                                
                                <div className="flexone">Total</div>

                                5050

                        </div>

                        <hr class="cheoout_hr" />
                        
                        <div className='d-f a-c j-c'>
                            <Button className='addgiftcode' onClick={handleShow}>Add Gift Code</Button>
                        </div>
                </Col>
            </div>
        </div>
    </Container>
    <Suspense fallback='Loading...'>
      <Footer/>
    </Suspense>

    {/* modal section is here */}
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add Gift Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' className='coupninpmd' placeholder='Enter Coupon Code' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  className='coupn_apllybtn'>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Checkout