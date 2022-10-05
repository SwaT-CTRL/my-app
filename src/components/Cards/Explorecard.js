import React from 'react'
import Col from 'react-bootstrap/esm/Col';
const Explorecard = ({expData}) => {
  return (
    <>
            {expData.map((curElem)=>{
                return(
                    <>
                    <Col lg={3} md={6} key={curElem.id}>
                    <div className='explorecard'>
                      <div className="exp_img_eff">  <img src={curElem.image} alt="" className="img-fluid exp_foodimg" /> </div>
                        <div className="exp_food_desc_sec">
                            
                            <div className="foodnm_ratesec d-f a-c">
                            
                                <div className="exp_foodtit flexone">{curElem.name}</div>

                                <div className="exp_foodrate">${curElem.rate}</div>

                            </div> 


                            <div className="exp_food_descpt">{curElem.description}</div>


                        </div>
                    </div>
                </Col>

                    </>
                )
            })}
               
    
    </>
  )
}

export default Explorecard