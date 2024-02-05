import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductCard.css'
import AddCartBtn from '../../../Components/AddCartBtn';
import Rating from '../../../Components/Rating';

const ProductCard = ({ product }) => {
    return (
        <div className='product-card-container'>
            <NavLink to={`/products/${product.id}`}>
                <div className='product-card-img-container'>
                    <img src={product.image} alt="" />
                </div>
                <div className='product-card-title'>
                    <h3>{product.title}</h3>
                </div>
            </NavLink>
            <div className='product-card-price'>${product.price}</div>
            <div className='product-card-rating'>
                <div>
                    <Rating rate={product.rating.rate} />
                </div>
                <div>
                    <p>({product.rating.count})</p>
                </div>
            </div>
            <div className='product-card-item-add-btn'>
                <AddCartBtn product={product} />
            </div>

        </div>
    )
}

export default ProductCard