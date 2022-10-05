import React from 'react';
import { Col } from 'react-bootstrap';
import {AiFillHome} from 'react-icons/ai';
import Logo from '../../logo.png';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
        <div className='loginmainsecto'>
            <div className='d-f flexwrap'>
                <Col lg={5} md={12} xs={12} className='loginlefty_sec d-f flexdirection a-c j-c pos_rel'>
                    <Link className="login_gohome_a" to='/'><AiFillHome/></Link>
                    <img src={Logo} alt="" className="img-fluid login_logo " /> 
                    <div className="login_leftheading">Welcome to <br/> Food World</div>
                </Col>
                <Col lg={7} md={12} xs={12} className='d-f flexdirection loginrightsecto'>

                    <div className="login_rightsec_wid_con my-auto">
                        <div className="d-f j-c">  <img src={Logo} alt="" className="img-fluid loginrightlogo"/> </div>
                        <div className="loginrighthead">Login</div>
                        <div className='logininputsec'>
                            <input placeholder='Username or Email ' type="text" id="form1" className="logininput" />
                        </div>
                        <div className='logininputsec'>
                            <input placeholder='Password ' type="text" id="form2" className="logininput" />
                        </div>
                        <div className='logininputsec loginchecksec'>
                            <input type="checkbox" className="form-check-input" id="log3" />
                            <label className="form-check-label" for="log3">Remember me  </label>
                        </div>
                        <div className="d-f j-c my-3">                    
                            <Link className="login_btno" to='/'> Login</Link>
                        </div>
                        <div className="d-f j-c mt-3 text-center donthavacttext">
                        
                            Don't have an account? <Link className="donthaveact ms-2 d-if" to='/register'>Register</Link>

                        </div>
                    </div>

                </Col>
            </div>    
        </div>    
    </>
  )
}

export default Login