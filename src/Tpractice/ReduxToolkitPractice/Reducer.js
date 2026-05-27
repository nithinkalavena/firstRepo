import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    cart:[],
    wishList:[]
}

let cartSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        addToCart:(state,action)=>{state.cart.push(action.payload)},

        removeFromCart:(state,action)=>{state.cart=state.cart.filter(item=>item.id!==action.payload)},

        moveToWishList:(state,action)=>{
            let item = state.cart.find(i=>i.id === action.payload)
            state.cart = state.cart.filter(i=>i.id !== action.payload)
            if(item)
                state.wishList.push(item)
        },

        moveToCart:(state,action)=>{
            let item = state.wishList.find(i=>i.id === action.payload)
            state.wishList = state.wishList.filter(i=>i.id !== action.payload)
            if(item)
                state.cart.push(item)
        }
    }
})

export let {addToCart,removeFromCart,moveToCart,moveToWishList} = cartSlice.actions

export default cartSlice.reducer