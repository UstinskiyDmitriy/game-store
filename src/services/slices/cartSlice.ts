// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameCard } from './gameSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

interface CartItem extends GameCard {
  count: number;
}

interface CartState {
  cart: CartItem[];
  total: number;
}

const CART_STORAGE_KEY = 'cart';

const initialState: CartState = loadFromLocalStorage(CART_STORAGE_KEY, {
  cart:[],
  total:0,
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<GameCard>) => {
      const card = action.payload;
      const existingItem = state.cart.find(item => item.id === card.id);
      
      if (existingItem) {
        existingItem.count += 1;
        state.total += card.price ?? 0;
      } else {
        state.cart.push({ ...card, count: 1 });
        state.total += card.price ?? 0;
      }
      saveToLocalStorage(CART_STORAGE_KEY, state)
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const item = state.cart.find(card => card.id === id);
      if (item) {
        state.total -= (item.price ?? 0) * item.count;
        state.cart = state.cart.filter(card => card.id !== id);
      }
      saveToLocalStorage(CART_STORAGE_KEY, state)
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find(card => card.id === action.payload.id);
      if (item && item.count < 5) {
        item.count += 1;
        state.total += item.price || 0;
      }
      saveToLocalStorage(CART_STORAGE_KEY, state)
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find(card => card.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
        state.total -= item.price || 0;
      }
      saveToLocalStorage(CART_STORAGE_KEY, state)
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
