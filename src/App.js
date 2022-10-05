import React, { Suspense, lazy } from 'react';
import Home from './components/Pages/Home';
import { Routes , Route } from 'react-router-dom';
//import Login from './components/Pages/Login';
//import Register from './components/Pages/Register';
// import Foodworld from './components/Pages/Foodworld';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
// import Cart from './components/Pages/Cart';
//import Checkout from './components/Pages/Checkout';
//import Thankyou from './components/Pages/Thankyou';
//import Contact from './components/Pages/Contact';
//import Searchresult from './components/Pages/Searchresult';
//import Help from './components/Pages/Help';
//import Aboutus from './components/Pages/Aboutus';
//import Bookingnow from './components/Pages/Bookingnow';
//import Offers from './components/Pages/Offers';
const Login = lazy(()=>import('./components/Pages/Login'));
const Register = lazy(()=>import('./components/Pages/Register'));
const Foodworld = lazy(()=>import('./components/Pages/Foodworld'));
const Cart = lazy(()=>import('./components/Pages/Cart'));
const Checkout = lazy(()=>import('./components/Pages/Checkout'));
const Thankyou = lazy(()=>import('./components/Pages/Thankyou'));
const Contact = lazy(()=>import('./components/Pages/Contact'));
const Searchresult = lazy(()=>import('./components/Pages/Searchresult'));
const Help = lazy(()=>import('./components/Pages/Help'));
const Aboutus = lazy(()=>import('./components/Pages/Aboutus'));
const Bookingnow = lazy(()=>import('./components/Pages/Bookingnow'));
const Offers = lazy(()=>import('./components/Pages/Offers'));
function App() {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>} /> 
        <Route exact path='/login' element={<Suspense fallback='Loading...'>
          <Login />
        </Suspense>} /> 
        <Route exact path='/register' element={<Suspense fallback='Loading...'>
          <Register/>
        </Suspense>} /> 
        <Route exact path='/foodworld' element={<Suspense fallback='Loading...'>
          <Foodworld/>
        </Suspense>} />
        <Route exact path='/cart' element={<Suspense fallback='Loading...'>
          <Cart/>
        </Suspense>} /> 
        <Route exact path='/checkout' element={<Suspense fallback='Loading...'>
          <Checkout/>
        </Suspense>} /> 
        <Route exact path='/thankyou' element={<Suspense fallback='Loading...'>
          <Thankyou/>
        </Suspense>} /> 
        <Route exact path='/contact' element={<Suspense fallback='Loading...'>
          <Contact/>
        </Suspense>} /> 
        <Route exact path='/searchresult' element={<Suspense fallback='Loading...'>
          <Searchresult/>
        </Suspense>} /> 
        <Route exact path='/help' element={<Suspense fallback='Loading...'>
          <Help/>
        </Suspense>} /> 
        <Route exact path='/aboutus' element={<Suspense fallback='Loading...'>
          <Aboutus/>
        </Suspense>} /> 
        <Route exact path='/bookingnow' element={<Suspense fallback='Loading...'>
          <Bookingnow/>
        </Suspense>} />
        <Route exact path='/offers' element={<Suspense fallback='Loading...'>
          <Offers/>
        </Suspense>} />
    </Routes> 
    </>
  );
}


export default App;