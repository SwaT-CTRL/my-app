import React, {useState, Suspense, lazy}  from 'react'
import Header from '../Header';
// import Footer from '../Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Foodcard from '../Api/Foodsqarecrdapi';
import { Link } from 'react-router-dom';
import {ImMinus} from 'react-icons/im';
import {ImPlus} from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Footer = lazy(()=>import('../Footer'));

const Searchresult = () => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState("");
    const [fdquery, setFdquery] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
          <Header/>
          <div className='headerheightcontrol'></div>
          <div className='foodworldsectionmain'>
              <Container className='foodwrld_container my-5'>
                  <Row className='j-c'>
                     <Col lg={10}>
                          <div className='filtorightheader d-f'>
                               
                              <Link to='/' className='checkoutbtno'>Go Back To Home</Link>
                          </div>

                          <div className='foodsearchbarnw'>
                            <input placeholder='Search Food Here' className='nwfoodsrchinp'   onChange={event => setFdquery(event.target.value)}/>
                          </div>
  
                          <div className='d-f flexwrap cardfoodviewsc'>
                          {Foodcard.filter(curElem => {
                                if(fdquery===''){
                                    return curElem;
                                }
                                else if(curElem.name.toLowerCase().includes(fdquery.toLowerCase())){
                                    return curElem;
                                }
                                else if(curElem.datafood.toLowerCase().includes(fdquery.toLowerCase())){
                                    return curElem;
                                }
                          }).map((curElem)=>{
                                return(
                                <>
                                <Col lg={4} md={6} className='cardfdvw' key={curElem.id}>
                                <div className='explorecard expfdcrdnew'  data-food={curElem.datafood}>
                                    <div className='exp_img_eff' ><img src={curElem.image} alt="" onClick={()=>{handleShow();setModalData(curElem);}} className="img-fluid exp_foodimg" /></div>
                                    <div className='exp_food_desc_sec'>
                                        <div className='foodnm_ratesec d-f a-s' >
                                            <div className='exp_foodtit flexone'>{curElem.name}</div>
                                        </div>
                                        <div className='exp_food_descpt'>{curElem.description}</div>
                                        <div className='fodycrdbtmsec d-f a-c '>
                                            <div className='flexone'><div className='exp_foodrate'>${curElem.rate}</div></div>
                                            <div className='foodincreaser'>
                                                <button className='minus' ><ImMinus/></button>
                                                <input className="quantity foodcardinptyy" min="0" name="quantity" value='0' type="number" />
                                                <button className='plus' ><ImPlus/></button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Modal className='food_modaly' show={show} onHide={handleClose} animation={false} keyboard={false}>
                                <Modal.Header closeButton>
                                <Modal.Title>{modalData.name}  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className='foody_modimg'><img src={modalData.image} alt="" className="img-fluid exp_modfoodimg"/></div>
                            
                                <div className='foody_moddescript'>{modalData.description}</div>
                                <div className='foody_mod_rate'>$ {modalData.rate}</div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>              
                                </Modal.Footer>
                            </Modal>
                                </>
                            )
                            })}
                          </div>
  
                      </Col>
  
                  </Row>
              </Container>
          </div>
          <Suspense fallback='Loading...'>
            <Footer/>
          </Suspense>
  
          
      
      </>
  )
}

export default Searchresult