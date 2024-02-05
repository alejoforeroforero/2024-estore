import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Cart.css'
import CartProduct from './Components/CartProduct';
import Summary from './Components/Summary';

const Cart = () => {
  const productsIds = useSelector(state => state.cartSliceReducer.productsIds);
  const totalPrice = useSelector(state => state.cartSliceReducer.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      <div className='cart-general-container'>
        {Object.keys(productsIds).length < 1 ? <h1 className='summary-empty'>No Products Selected</h1> :
          <>
            <div>
              {Object.entries(productsIds).map(productId => {
                return <CartProduct key={productId[0]} productId={productId[0]} quantity={productId[1]} />
              })}
            </div>
          </>
        }
        <div>
          <Summary totalPrice={totalPrice} />
        </div>
      </div>
    </>
  )
}

export default Cart