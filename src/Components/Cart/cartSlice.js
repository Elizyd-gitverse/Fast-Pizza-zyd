import { createSlice } from "@reduxjs/toolkit"

//1.state
const initialState = {
    cart: [],
    orderID: ''
}

//2.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart(state, action) {
            state.cart = [...state.cart, action.payload]
        },

        RemoveFromCart(state, action) {
            state.cart = state.cart.filter(pizza => pizza.pizzaId !== action.payload)
        },

        IncreaseQty(state, action) {
            const pizza = state.cart.find(pizza => pizza.pizzaId === action.payload)
            pizza.quantity = pizza.quantity + 1
            pizza.totalPrice = pizza.unitPrice * pizza.quantity
        },

        DecreaseQty(state, action) {
            const pizza = state.cart.find(pizza => pizza.pizzaId === action.payload)
            pizza.quantity = pizza.quantity - 1
            pizza.totalPrice = pizza.unitPrice * pizza.quantity
            if(pizza.quantity === 0) cartSlice.caseReducers.RemoveFromCart(state, action) //reusing the action function
        },

        ClearCart(state) {
            state.cart = []
        },

        OrderId(state, action) {
            state.orderID = action.payload
        }
    }
})

//3.
export const { AddToCart, RemoveFromCart, IncreaseQty, DecreaseQty, ClearCart, OrderId } = cartSlice.actions
export default cartSlice.reducer

//useSelector
//cart
export const getCart = (store) => store.cart.cart

//qty per pizza
export const getQtyPerPizza = (id) => (store) => store.cart.cart.find(pizza => pizza.pizzaId === id).quantity

//all pizza qty
export const getQtyAllPizza = (store) => store.cart.cart.reduce((acum, pizza) => acum + pizza.quantity, 0)

//all pizza price
export const getPriceAllPizza = (store) => store.cart.cart.reduce((acum, pizza) => acum + pizza.totalPrice, 0)

//Id 
export const getOrderId = (store) => store.cart.cart.orderID
