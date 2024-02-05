import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import './ProductItem.css'
import AddCartBtn from '../../Components/AddCartBtn';
import Rating from '../../Components/Rating';

const ProductItem = () => {

  const params = useParams();

  const [product, setProduct] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      let data;

      try {
        data = await res.json();
        setProduct(data)
      } catch (e) {
        console.log(e);
      }

      setIsReady(true)
    }

    fetchData();

  }, [])

  const drawPage = () => {
    if (product) {
      return (
        <>
          <div className='product-item-container'>
            <div className='product-item-img'>
              <img src={product.image} alt="" />              
            </div>
            <div>
              <div className='product-item-title'>{product.title}</div>
              <div>
                <Rating rate={product.rating.rate} />
              </div>
              <hr></hr>
              <div className='product-item-price'>
                <span>Price: </span> 
                <span>${product.price}</span>
              </div>
              <div className='product-item-description'>
                <p>{product.description}</p>
              </div>
              <div className='product-item-add-btn'>
                <AddCartBtn product={product} />
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return <div>Pailas</div>
    }
  }

  return (
    <div>
      {isReady ? drawPage() : <div>Loading ..</div>}
    </div>
  )
}

export default ProductItem