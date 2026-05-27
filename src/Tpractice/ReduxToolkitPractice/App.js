import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Reducer'

export let store = configureStore(
    {
        reducer:{
            shop:cartReducer,
        }
    }
)