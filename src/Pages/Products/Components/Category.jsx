import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategorySelected, removeCategorySelected } from '../../../Redux/CategoriesSlice/categoriesSlice';
import { filterCategory } from '../../../Redux/ProductsSlice/productsSlice';

import './Category.css';

const Category = ({ category }) => {

    const selected = useSelector(state => state.categoriesReducer.categoriesSelected);
    const isSelected = selected.includes(category);
    const dispatch = useDispatch();

    const handleOnChange = (e, category)=>{
        if(e.target.checked){
            dispatch(addCategorySelected(category))
            const selectedForProducts = [...selected, category];
            dispatch(filterCategory(selectedForProducts))

        }else{
            dispatch(removeCategorySelected(category))
            const selectedForProducts = selected.filter(categoryName => categoryName != category)
            dispatch(filterCategory(selectedForProducts))
        }
    }

    return (
        <div className='category-checkbox'>
            <input type="checkbox" checked={isSelected} onChange={(e)=>{handleOnChange(e, category)}} />
            <label htmlFor="">{category}</label>
        </div>
    )
}

export default Category