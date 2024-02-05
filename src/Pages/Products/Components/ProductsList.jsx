import React, { useEffect, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../Redux/ProductsSlice/productsActions';
import ProductCard from './ProductCard';

import './ProductsList.css';


const ProductsList = () => {
    const products = useSelector(state => state.productsReducer.productsFiltered);
    const firstCallReady = useSelector(state => state.productsReducer.firstCallReady);
    const categoriesSelected = useSelector(state => state.categoriesReducer.categoriesSelected);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!firstCallReady) {
            dispatch(getProducts())
        }
    }, [])

    return (
        <>
            <div className='categories-selected'>
                {categoriesSelected.length > 0 ?
                    <p>
                        <span>Results for: </span>
                        <span className='categories-selected-span'>{categoriesSelected.join(', ')}</span>
                    </p>
                    :
                    <span className='categories-selected-span'>All Products</span>
                }
            </div>
            <div className='product-card-grid'>
                {products.map(product => {
                    return <ProductCard key={product.id + Math.random()} product={product} />
                })}
            </div>
        </>
    )
}

export default ProductsList