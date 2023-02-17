import React from 'react'
import { useState } from 'react' 
import Modal from 'react-bootstrap/Modal';

export default function MainDish({dish}) {
    const [quantity, setQuantity] = useState(1)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='m-4 shadow-lg p-3 mb-5 bg-white rounded'>
        <div onClick={handleShow}>
            <h1 className='dish-name '>{dish.name}</h1>
            <img src={dish.image} className = "img-fluid" style={{height: "200px", width: "200px"}}/>
        </div>
        <div>
            <div className='w-100 m-1 p-3'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x, i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>

            <div className='flex-container'>
                    <div className= 'm-10 w-100'>
                        <h2 className='mt-2'>Price: {dish.price * quantity} Rs</h2>
                    </div>
                    <div className= 'm-10 w-100'>
                        <button className='btn'>Add to cart</button>
                    </div>
            </div>
        </div>

        <Modal show = {show}>
        <Modal.Header >
          <Modal.Title>{dish.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='md'>
        <img src={dish.image} className = "img-fluid" style={{height: "300px", width: "300px"}}/>
        <p>{dish.info}</p>
        </Modal.Body>

        <Modal.Footer>
        <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  ) 
}
