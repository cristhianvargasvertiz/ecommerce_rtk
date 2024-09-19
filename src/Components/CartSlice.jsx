import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
  };

  const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); // 
            if (existingItem) {
              existingItem.quantity += 1;
            } 
            else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },

        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // .filter() crea un array nuevo con los "id"s que cumplen la condicion, en este caso, los ITEMS que tienen diferentes al "id"s al ingresado por "action.payload" por eso se una para REMOVE.
          },

        clearCart(state) {
            state.cartItems = [];
          },

        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },

        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload); // returns the first item that meets the condition
            if (itemToDecrease && itemToDecrease.quantity > 1) { // verifica que que exista primero && sea mayor a 1
              itemToDecrease.quantity -= 1; // si se cumple la condicion le resta 1
            }
          },


    }
});
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;

  export default CartSlice.reducer;