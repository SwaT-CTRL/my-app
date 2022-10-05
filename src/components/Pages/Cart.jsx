import React , {useState, Suspense, lazy} from 'react';
import Header from '../Header';
// import Footer from '../Footer';
import {  Col, Container, Table } from 'react-bootstrap';
import Cartapi from '../Api/Cartapi';
import Carttd from '../Cards/Carttd';
import {Link} from 'react-router-dom';
const Footer = lazy(()=>import('../Footer'));

const Cart = () => {
    const [Cartfoodmenu] = useState(Cartapi);

    

  
  return (
    <>
    <div className='cartmain'>
        <Header/>
        <div className='headerheightcontrol'></div>
        <Container className='py-5'>
            <div className='fod_cart_card'>
                <div className='cart_heading'>Food Cart</div>
                <div className='d-f flexwrap'>
                   <Col lg={9} xs={12} className='px-2'>
                         <Table responsive="lg" className='carttable'   hover>
                            <thead>
                            <tr>                           
                                <th> Food Item</th>
                                <th className='text-center'>No. of Item</th>
                                <th className='text-center'>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                               <Carttd Cartfoodmenu={Cartfoodmenu}></Carttd>
                            </tbody>
                         </Table>
                   </Col>

                   <Col lg={3} xs={12} className='px-2'>
                      <div className='cart_summarysec'>
                        <div className="crt_sumhead">Summary</div>
                        <div className="crtsum_bdysec">
                              
                              <div className="d-f a-c crtsm_detsec">
                                    
                                  <div className="crtsm_dethead flexone">Total Items</div>

                                  <div className="crtsm_detrate">Rs. 5500</div>

                              </div>

                              <div className="d-f a-c crtsm_detsec">
                                    
                                  <div className="crtsm_dethead flexone">Delivery Charges</div>

                                  <div className="crtsm_detrate">Rs. 50</div>

                              </div>

                              <div className="addpromocodey">Add Promo Code</div>

                              <hr className="crtsumhr" />

                              <div className="d-f a-c crtsm_detsec">
                                    
                                  <div className="crtsm_dethead flexone">Total</div>

                                  <div className="crtsm_detrate">Rs. 5050</div>

                              </div>

                              <Link className="crtsumchecbtn text-center" type="button" to='/checkout'>Checkout</Link>

                          </div>

                      </div>
                   </Col>
                </div>
            </div>
        </Container>
        <Suspense fallback='Loading...'>
            <Footer/>
        </Suspense>
    </div>
    </>
  )
}

export default Cart