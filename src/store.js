import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Components/User/userSlice'
import cartReducer from './Components/Cart/cartSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store