import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsIds:{},
    totalPrice:0,
    status:'idle',
    error:''
}

const cartSlice = createSlice({
    name:'CartSlice',
    initialState,
    reducers:{
        addProduct:(state, action)=>{       
            if(state.productsIds[action.payload.id]){                
                state.productsIds[action.payload.id] = +state.productsIds[action.payload.id]+1
                state.totalPrice = +state.totalPrice + +action.payload.price;
            }else{
                state.productsIds[action.payload.id] = 1
                state.totalPrice = +state.totalPrice + +action.payload.price;
            }

            state.totalPrice = state.totalPrice.toFixed(2);
           
        },
        subtractProduct:(state, action)=>{
            if(state.productsIds[action.payload.id]){                
                state.productsIds[action.payload.id] = state.productsIds[action.payload.id]-1;
                state.totalPrice = +state.totalPrice - +action.payload.price;
            }

            state.totalPrice = state.totalPrice.toFixed(2);

            if(state.productsIds[action.payload.id] < 1){
                delete state.productsIds[action.payload.id]
            }
        }
    },
})

export const { addProduct, subtractProduct } = cartSlice.actions;
export default cartSlice.reducer;