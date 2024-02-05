import React from 'react'
import Categories from './Components/Categories';
import ProductsList from './Components/ProductsList';

import './Products.css'

const Products = () => {
  return (
    <>
      <div className='products-general-container'>
        <div className='products-categories-container'>
          <Categories />
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
    </>
  )
}

export default Products