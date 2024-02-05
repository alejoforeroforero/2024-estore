import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products?limit=20');
        const data = await res.json();
        return data;
    }
)