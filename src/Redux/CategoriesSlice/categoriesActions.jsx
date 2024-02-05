import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        return data;
    }
)