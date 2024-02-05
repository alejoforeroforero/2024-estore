import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions"; 

const initialState = {
    products:[],
    productsFiltered:[],
    firstCallReady:false,
    status:'idle',
    error:''
}

const productsSlice = createSlice({
    name:'Products',
    initialState,
    reducers:{
        filterCategory:(state, action)=>{
            let lista = [];
            action.payload.map(category =>{ 
                lista = [...lista, ...state.products.filter(product => product.category == category)]            
            })
            if(lista.length < 1){
                state.productsFiltered = state.products;
            }else{
                state.productsFiltered = lista;
            }   
        }
    },
    extraReducers:builder =>{
        builder.addCase(getProducts.pending, (state, action)=>{
            state.status = 'Loading...'
        }),
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.status = "Success";
            state.products = action.payload;
            state.productsFiltered = action.payload;
            state.firstCallReady = true;
        }),
        builder.addCase(getProducts.rejected, (state, action)=>{
            state.status = "Failed!"
            state.error = action.error.message;
        })
    }
})

export const { filterCategory } = productsSlice.actions;
export default productsSlice.reducer;