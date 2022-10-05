import React,{useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Explore from './Api/Explorefoodapi';
import Explorecard from './Cards/Explorecard';
import {useNavigate} from 'react-router-dom';
const Resthome = () => {
const [expData] = useState(Explore);
const handleClick = event => {
  event.preventDefault();
  navigate('/searchresult');
}; 

const navigate = useNavigate();

  return (
    <>

      <div className='adv_bookingsec'>

          <Container>

              <div className='advbooksec p-3 py-5'>

                  <h2 className='sec3head text-center'>Advance Booking</h2>

                  <div className='d-f j-c'>

                      <Col lg={8} sm={12} xs={12} className="px-0">

                          <div className='adv_booksrch_sec d-f'>
                            <input type="text" placeholder="Search Food" className="advbookinput flexone" />
                            <button className="adbbook_btno" onClick={handleClick}>Go</button>
                          </div>

                          <div className="d-f flexwrap a-e filt_adbbookrow">
                        
                              <Col lg={4} xs={12} className=" px-2">
                                    
                                  <div className="filt_advsc pos_rel">

                                      <div className="filtinpuyhead">Date</div>
                                      
                                      <input type="date" placeholder="dd-mm-yyyy" name="date" className="filtadbinp filtadbdate" />

                                  </div>
                              </Col>


                              <Col lg={4} xs={12} className=" px-2">
                                    
                                  <div className="filt_advsc pos_rel">

                                      <div className="filtinpuyhead">Time</div>
                                      
                                      <input type="time"  className="filtadbinp filtadbinptime" />
                                  </div>
                              </Col>


                              <Col lg={4} xs={12} className=" px-2">
                                    
                                  <div className="filt_advsc pos_rel">

                                      <div className="filtinpuyhead">People</div>
                                      
                                      <select className="adb_bookselect">
                                        <option value="0"  >Select Peoples</option>
                                        <option value="1"> 1</option>
                                        <option value="2"> 2</option>
                                        <option value="3"> 3</option>
                                      </select>

                                  </div>

                              </Col>

                              <Col xs={12} className='py-3 d-f a-c j-c'>
                                    <Button className='advbookingbtn'>Book Now</Button>
                              </Col>


                          </div>

                      </Col>

                  </div>
              </div>

          </Container>

      </div>


      <div className='ourservicesection section_four py-5'>
          <Container className='oursrv_cont py-3'>
              <Row className='mb-5 pb-4'>
                <Col lg={6} className='px-2'>
                  <div className='sectwohead'>Our Services</div>
                </Col>
                <Col lg={6}>
                  <div className='sectwo_subhead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div>
                </Col>
              </Row>

              <Row>
                  <Col lg={8} xs={12} className="px-1">

                      <div className='d-f flexwrap a-c'>

                        <Col lg={6} md={6} xs={12} className="px-2">

                              <div className='serv_icosec d-f j-c a-c'>
                                <img src="../images/servico1.png" alt="" className="img-fluid serbico" />
                              </div>

                        </Col>

                        <Col lg={6} md={6} xs={12} className="px-2">
                            <div className='servo_heading'>
                              Advance Table <br/> Booking
                            </div>
                            <div className='servy_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </Col>

                        <Col lg={6} md={6} xs={12} className="px-2 chor1">
                            <div className='servo_heading'>
                            Food Available <br/> 24/7
                            </div>
                            <div className='servy_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </Col>

                        <Col lg={6} md={6} xs={12} className="px-2">

                              <div className='serv_icosec d-f j-c a-c'>
                              <img src="../images/servico2.png" alt="" className="img-fluid serbico" />
                              </div>

                        </Col>



                      </div>

                  </Col>

                  <Col lg={4} xs={12} className="px-2">
                    <div className='servobigcrd'>
                      <img src="../images/servico3.png" alt="" className="img-fluid sevicobigy"  />
                      <div className="servoheadbigy">Free Home Delivery At Your Door Steps</div>
                      <div className="serbsubheadbigy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                  </Col>

              </Row>
          </Container>
      </div>


      <div className='explorefoodsection sectionfive py-5'>
          <Container>
              <div className='explore_heading'>Explore Our Food</div>
              <div className='explore_subhead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div>

              <div className='d-f flexwrap mt-5'>

                  <Explorecard expData={expData} />

              </div>
          </Container>
      </div>

      <div className='downloadapp_section py-5 d-f flexdirection pos_rel'>
        <img src="../images/handwithapp.png" alt="" className="img-fluid handappshowy"/>

          <Container className='my-auto pos_rel'>
            <Row>
              <Col lg={7}>
                <div className="sectwohead app_mhead white mb-3 ">Download App For Exciting Deals</div>
                <div className='appsubhead mb-3 white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div>

                <div className='d-f a-c mt-4'>
                  <a href='#action1' className='dwnico_a me-2' > <img src="../images/and.png" alt="" className="img-fluid adndownimg"/></a> 
                  <a href='#action1' className='dwnico_a  ' > <img src="../images/iph.jpg" alt="" className="img-fluid adndownimg"/></a>                      
                </div>

              
                               
            
              </Col>
            </Row>
          </Container>

      </div>
    
    
    </>
  )
}

export default Resthome;
