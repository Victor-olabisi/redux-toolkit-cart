import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/cartModal'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal:modalReducer,
    }
})

export default store