import React from 'react';

import './Summary.css';

const Summary = ({ totalPrice }) => {
  return (
    <div className='product-cart-summary'>
      <h2>Summary</h2>
      <p>Cart Total: {totalPrice}</p>
      <p>Shipping Charges: Free</p>
      <hr />
      <h3>Total: {totalPrice}</h3>
      <hr />
      <div>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Summary