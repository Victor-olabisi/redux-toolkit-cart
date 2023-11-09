import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
    cartItems: cartItems,
    amount: 8,
    total: 0,
    isLoading:true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeCart: (state, {payload:id},action) => {
            console.log(id);
            state.cartItems = state.cartItems.filter(((item)=>item.id !== id))
        }
    }
})

export const {clearCart, removeCart} = cartSlice.actions
export default cartSlice.reducer