import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from './categoriesActions';

const initialState = {
    categories:[],
    categoriesSelected:[],
    status:'idle',
    error:''
}

const categoriesSlice = createSlice({
    name:'Categories',
    initialState,
    reducers:{
        addCategorySelected:(state, action)=>{
            state.categoriesSelected = [...state.categoriesSelected, action.payload];
        },
        removeCategorySelected:(state, action)=>{
            state.categoriesSelected = state.categoriesSelected.filter(item => item != action.payload)
        }

    },
    extraReducers:builder =>{
        builder.addCase(getCategories.pending, (state, action)=>{
            state.status = 'Loading...'
        }),
        builder.addCase(getCategories.fulfilled, (state, action)=>{
            state.status = "Success";
            state.categories = action.payload;
        }),
        builder.addCase(getCategories.rejected, (state, action)=>{
            state.status = "Failed!"
            state.error = action.error.message;
        })
    }
})

export const { addCategorySelected, removeCategorySelected } = categoriesSlice.actions;
export default categoriesSlice.reducer;