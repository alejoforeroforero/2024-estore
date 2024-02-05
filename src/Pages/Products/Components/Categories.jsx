import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../Redux/CategoriesSlice/categoriesActions';

import './Categories.css'
import Category from './Category';

const Categories = () => {
  const categories = useSelector(state => state.categoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className='categories-inner-container'>
      <h3>Categories</h3>
      {categories.map((category, key) => {
        return <Category key={category+key} category={category} />
      })}
    </div>
  )
}

export default Categories