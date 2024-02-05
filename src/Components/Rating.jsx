import React from 'react';

import './Rating.css';

const Rating = ({rate}) => {    
    const rateNumber = Math.floor(rate);
    return (
        <div className='product-rating'>
            {Array.from({length: rateNumber}, (_, index) =>{
                return <i key={rateNumber+index} className='fa fa-star' />
            })}
        </div>
    )
}

export default Rating