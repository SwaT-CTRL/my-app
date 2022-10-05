import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Homeslidercard = ({menuData}) =>{
  //  console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        return(
          <>
              <div className="foodcarinner" key={curElem.id}>                
                <div className="sectwo_foodcard pos_rel">

                    <div className="food_card_imseco">                        
                         <img src={curElem.image} alt="" className="img-fluid foodcrd_img" /> 
                    </div>

                    <div className="food_crd_contentsec">
                        
                        <div className="foodcrd_name">{curElem.name} </div>

                        <div className="fody_crdsubcont">{curElem.description}</div>

                        <div className="foodcrd_loca"><FontAwesomeIcon icon={faLocationDot} /> {curElem.location}</div>

                        <button className="food_crd_btno">Book Now</button>

                    </div>

                </div>
             </div> 
            </>
        )
      })}
        
    </>
  )
}


export default Homeslidercard;