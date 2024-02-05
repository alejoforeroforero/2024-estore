import React from 'react';
import Rating from '../../../Components/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, subtractProduct } from '../../../Redux/CartSlice/cartSlice';

import './CartProduct.css';

const CartProduct = ({ productId, quantity }) => {
    const products = useSelector(state => state.productsReducer.products);
    const product = products.find(item => item.id == productId);

    const dispatch = useDispatch();

    const handleSubstractItem = ()=>{
        dispatch(subtractProduct(product))
    }

    const handleAddItem = ()=>{
        dispatch(addProduct(product))
    }

    return (
        <>
            <div className='product-cart-container'>
                <div className='product-cart-img'>
                    <img src={product.image} alt="" />
                </div>
                <div className='product-cart-info'>
                    <div className='product-cart-header'>
                        <h3>{product.title}</h3>
                        <h3 className='product-cart-price'>${product.price*quantity}</h3>
                    </div>
                    <div>
                        <Rating rate={product.rating.rate} />
                    </div>
                    <hr></hr>
                    <div className='product-cart-control' >
                        <span onClick={handleSubstractItem} className='product-cart-symbol'>-</span>
                        <span>{quantity}</span>
                        <span onClick={handleAddItem} className='product-cart-symbol'>+</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartProduct