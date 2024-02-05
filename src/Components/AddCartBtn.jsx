import React from 'react';
import { useDispatch } from 'react-redux';

import './AddCartBtn.css';
import { addProduct } from '../Redux/CartSlice/cartSlice';

const AddCartBtn = ({product}) => {

    const dispatch = useDispatch()
    
    const handleOnClick = ()=>{
        dispatch(addProduct(product))
    }

    return (
        <div className='cart-icon-container'>
            <i className='fa fa-shopping-cart' />
            <p onClick={handleOnClick}>Add to Cart</p>
        </div>
    )
}

export default AddCartBtn