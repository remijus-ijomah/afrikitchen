import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import foodSlice from './foodSlice';


const store = configureStore({
    reducer:{
        cart:cartSlice,
        foodItems: foodSlice,
    },
});

export default store;