import React from 'react'
import { Button } from 'react-bootstrap';
import {RiDeleteBin3Fill} from 'react-icons/ri';

const Checkouttd = ({checkoutOrderMenu}) => {
  return (
    <>
        {checkoutOrderMenu.map((curElem)=>{
            return(
                <>
                <tr key={curElem.id}>
            <td>
                <div className='d-f cartitemnsec'>
                    <img src={curElem.image} alt="" className="img-fluid cartfoodimg" />
                    <div className='flexone'>
                        <div className="cartfoodname">{curElem.name}</div>
                        <div className='d-f a-c cartfoodbtnsec'>
                            <Button className='cartfodbtn'><RiDeleteBin3Fill/></Button>                            
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-center'>{curElem.number}</td>
            <td className='text-center fw_600'>Rs. {curElem.rate}</td>
        </tr>
                </>
            )
        })}
    </>
  )
}

export default Checkouttd