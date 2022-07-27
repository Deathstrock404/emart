 import React from 'react'
 import { useSelector } from 'react-redux'
 import { useDispatch } from 'react-redux'
 import { delCart } from '../redux/action'

 const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const cartItem = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-aria-label='close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px"
                            width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>Rs {cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   return (
     <div>
        
     </div>
   )
 }
  export default Cart