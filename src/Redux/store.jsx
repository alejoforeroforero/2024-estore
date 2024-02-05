import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductsSlice/productsSlice";
import categoriesSlice from "./CategoriesSlice/categoriesSlice";
import cartSlice from "./CartSlice/cartSlice";


export const store = configureStore({
    reducer: {
        productsReducer: productsSlice,
        categoriesReducer:categoriesSlice,
        cartSliceReducer:cartSlice
    }
})