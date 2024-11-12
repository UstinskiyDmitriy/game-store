import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameCard } from './gameSlice';

interface CartState {
  cart: GameCard[];
  total: number;
}

const initialState: CartState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<GameCard>) => {
      const card = action.payload;
      state.cart.push(card);

      const price = card.price || 0; 
      state.total += price;
    },
    removeFromCart: (state, action: PayloadAction<{ id: number, count: number }>) => {
      const { id, count } = action.payload;
      const removedCard = state.cart.find(card => card.id === id);
      if (removedCard) {
        const price = removedCard.price || 0; 
        state.total -= price * count;
      }
      state.cart = state.cart.filter(card => card.id !== id);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number, price: number | undefined }>) => {
      const { id, price } = action.payload;
      const item = state.cart.find(card => card.id === id);
      if (item) {
        const priceValue = typeof price === 'number' ? price : 0; 
        state.total += priceValue;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number, price: number | undefined }>) => {
      const { id, price } = action.payload;
      const item = state.cart.find(card => card.id === id);
      if (item) {
        const priceValue = typeof price === 'number' ? price : 0; 
        state.total -= priceValue;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;