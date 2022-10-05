import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../Footer';
import Header from '../Header';
const Footer = lazy(()=>import('../Footer'));
 

const Thankyou = () => {
  return (
    <>
    <Header/>
    <div className='headerheightcontrol'></div>
    
    <div className='thankyousec py-5'>
        <img src={process.env.PUBLIC_URL + '/images/thankyou.png'} alt="" class="img-fluid thankyouimg"/>

        <Link className='gobacktoshooping' to='/'>Continue Shopping</Link>

    </div>



    <Suspense fallback='Loading...'>
        <Footer/>
    </Suspense>

    </>
  )
}

export default Thankyou