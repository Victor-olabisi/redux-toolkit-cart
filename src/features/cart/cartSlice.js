import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
    cartItems: cartItems,
    amount: 0,
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
        },
        increaseCart: (state, { payload: id }) => {
          const  cartItem = state.cartItems.find((item) => {
              return item.id === id
              
          })
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload: id }) => {
            const cartItem = state.cartItems.find((item) => {
                return item.id === id
            })
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0
            state.cartItems.forEach((item) => {
                 amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }

    }
})

export const {clearCart, removeCart, increaseCart, decrease, calculateTotals} = cartSlice.actions
export default cartSlice.reducer