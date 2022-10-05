import React, { Suspense, lazy, useState } from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import { Col, Container, Row, Button   } from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';
import {GoThreeBars} from 'react-icons/go';
import Foodcard from '../Api/Foodsqarecrdapi';
import CategoryfilterMenu from '../Api/Categoryfilter';
// import Foodsquarecrd from '../Cards/Foodsquarecrd';
// import Categoryfiltercrd from '../Cards/Categoryfiltercrd';
import { Link } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai';

const Footer = lazy(()=>import('../Footer'));

const Foodsquarecrd = lazy(()=>import('../Cards/Foodsquarecrd'));
const Categoryfiltercrd = lazy(()=>import('../Cards/Categoryfiltercrd'));

const Foodworld = () => {
    const [Foodmenu] = useState(Foodcard);
    const [Filtermenu] = useState(CategoryfilterMenu)
    const openNav = () => {
        document.querySelector('.foodworldleftsec').classList.add('shownav');
    }

    const closeNav = () => {
        document.querySelector('.foodworldleftsec').classList.remove('shownav');
    }
  
    const closeModal = () =>{
        document.querySelector('.foody_custom_modal').classList.add('hidefoodmodal');
    }

    const openModal = () =>{
        document.querySelector('.foody_custom_modal').classList.remove('hidefoodmodal');
    }

   

  return (
    <>
        <Header/>
        <div className='headerheightcontrol'></div>
        <div className='foodworldsectionmain'>
            <Container className='foodwrld_container my-5'>
                <Row>
                    <Col lg={3}>
                        <div className='foodworldleftsec'>
                            <div className='fw_filterheader'>
                                Filters
                                <button className='filtyclosebtno ml-auto' onClick={closeNav}><AiOutlineClose/></button>
                            </div>

                            <div className='filter_mainsecto'>
                                <div className='filt_cat_heading'>Food Category</div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="ab1" />
                                    <label className="form-check-label" htmlFor="ab1">  Sweets </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="ab2" />
                                    <label className="form-check-label" htmlFor="ab2">  Spicy Food </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="ab3" />
                                    <label className="form-check-label" htmlFor="ab3">  Chinese Food  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="ab4" />
                                    <label className="form-check-label" htmlFor="ab4">  Mexican Food  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="ab5" />
                                    <label className="form-check-label" htmlFor="ab5">   Indian Food </label>
                                </div>
                                <div className='viewalllink'  onClick={openModal}>View All</div>
                            </div>

                            <div className='filter_mainsecto'>
                                <div className='filt_cat_heading'>Price</div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="cb1" />
                                    <label className="form-check-label" htmlFor="cb1">  Rs. 100 to 200 </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="cb2" />
                                    <label className="form-check-label" htmlFor="cb2">  Rs. 200 to 400 </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="cb3" />
                                    <label className="form-check-label" htmlFor="cb3">  Rs. 400 to 1000  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="cb4" />
                                    <label className="form-check-label" htmlFor="cb4">  Rs. 1000 to 5000  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="cb5" />
                                    <label className="form-check-label" htmlFor="cb5">  above Rs. 5000 </label>
                                </div>
                                <div className='viewalllink'>View All</div>
                            </div>

                            <div className='filter_mainsecto'>
                                <div className='filt_cat_heading'>Discount</div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="bb1" />
                                    <label className="form-check-label" htmlFor="bb1">  More than 50%  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="bb2" />
                                    <label className="form-check-label" htmlFor="bb2"> 40% - 50%  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="bb3" />
                                    <label className="form-check-label" htmlFor="bb3">  30% - 40% </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="bb4" />
                                    <label className="form-check-label" htmlFor="bb4">  20% - 30%  </label>
                                </div>
                                <div className='filler_inputbox'>
                                    <input type="checkbox" className="form-check-input" id="bb5" />
                                    <label className="form-check-label" htmlFor="bb5">   Less than 20% </label>
                                </div>
                                <div className='viewalllink'>View All</div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={9}>
                        <div className='filtorightheader d-f'>
                            <button className='filtshowicony' onClick={openNav}><GoThreeBars/></button>
                            <Link to='/cart' className='checkoutbtno'>Cart</Link>
                        </div>

                        <div className='d-f flexwrap cardfoodviewsc'>
                            <Suspense fallback='Loading...'>
                            <Foodsquarecrd Foodmenu={Foodmenu}/>
                            </Suspense>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
        <Suspense fallback='Loading'>
            <Footer/>
        </Suspense>

        {/* modal is here */}
         
         <div className='foody_custom_modal hidefoodmodal'>
                <div className='foody_cust_body'>
                    <div className='foody_modal_header d-f'>
                        <h3 className='flexone modalyheady'>Category</h3>
                        <Button className='foody_modal_close1' onClick={closeModal}><AiFillCloseCircle/></Button>
                    </div>

                    <div className='foody_modal_midsec'>
                        <div className="d-f flexwrap">
                            <Suspense fallback='Loading...'>
                               <Categoryfiltercrd Filtermenu={Filtermenu} />
                            </Suspense>
                        </div>
                    </div>

                    <div className='foody_modl_btm d-f a-c j-e'>
                        <Button className='foody_modal_close' onClick={closeModal}>Close</Button>
                    </div>
                </div>

         </div>
    
    </>
  )
}


export default Foodworld