import React,{useReducer,useContext,createContext,useState } from 'react'
import { Col } from 'react-bootstrap';
import {ImMinus} from 'react-icons/im';
import {ImPlus} from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const useValue = () => useReducer(reducer, initialState);


const initialState = {
    count1: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          [action.name]: state[action.name] + 1,
        };
      case 'DECREMENT':
        if(state[action.name]>0){
            return {
                ...state,
                [action.name]: state[action.name] - 1,
              };
        }
      default:
        return state;
    }
  };

  const Context = createContext(null);

  const useGlobalState = () => {
    const value = useContext(Context);
    if (value === null) throw new Error('Please add GlobalStateProvider');
    return value;
  };
  
  const GlobalStateProvider = ({ children }) => (
    <Context.Provider value={useValue()}>{children}</Context.Provider>
  );

  const Counter = ({ name }) => {
    const [state, dispatch] = useGlobalState();
    return (
      <div>
        <div className='foodincreaser'>
            <button className='minus' onClick={() => dispatch({ type: 'DECREMENT', name })}><ImMinus/></button>
            <input className="quantity foodcardinptyy" min="0" name="quantity" value= {state[name]} type="number"  />
            <button className='plus' onClick={() => dispatch({ type: 'INCREMENT', name }) }><ImPlus/></button> 
        </div>
      </div>      
    );
  };
  

  const Foodsquarecrd = ({Foodmenu}) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <> 
    {Foodmenu.map((curElem)=>{    

      
        return(
        <>
          <Col lg={4} md={6} className='cardfdvw' key={curElem.id}>
              <div className='explorecard expfdcrdnew'  data-food={curElem.datafood}>
                  <div className='exp_img_eff' onClick={()=>{handleShow();setModalData(curElem);}}><img src={curElem.image} alt="" className="img-fluid exp_foodimg" /></div>
                  <div className='exp_food_desc_sec'>
                      <div className='foodnm_ratesec d-f a-s' >
                          <div className='exp_foodtit flexone'>{curElem.name}</div>
                      </div>
                      <div className='exp_food_descpt'>{curElem.description}</div>
                      <div className='fodycrdbtmsec d-f a-c '>
                          <div className='flexone'><div className='exp_foodrate'>${curElem.rate}</div></div>
                          <GlobalStateProvider> <Counter name="count1" /> </GlobalStateProvider>
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
    </>
  )
}

export default Foodsquarecrd;