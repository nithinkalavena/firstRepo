import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from './SearchSlice'
let store = configureStore({
    reducer:{search:SearchSlice}
})
export default store