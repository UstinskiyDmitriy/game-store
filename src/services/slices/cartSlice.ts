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

      let price = 0;
      if (typeof card.price === 'number') {
        price = card.price;
      } else if (typeof card.price === 'string' && card.price.toLowerCase() === 'бесплатно') {
        price = 0;
      }

      state.total += price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      const removedCard = state.cart.find(card => card.id === cardId);
      if (removedCard) {
        let price = 0;
        if (typeof removedCard.price === 'number') {
          price = removedCard.price;
        } else if (typeof removedCard.price === 'string' && removedCard.price.toLowerCase() === 'бесплатно') {
          price = 0;
        }

        state.total -= price;
      }
      state.cart = state.cart.filter(card => card.id !== cardId);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number, price: number | string | undefined }>) => {
      const { id, price } = action.payload;
      const item = state.cart.find(card => card.id === id);
      if (item) {
        let priceValue = 0;
        if (typeof price === 'number') {
          priceValue = price;
        } else if (typeof price === 'string' && price.toLowerCase() === 'бесплатно') {
          priceValue = 0;
        }
        state.total += priceValue;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number, price: number | string | undefined}>) => {
      const { id, price } = action.payload;
      const item = state.cart.find(card => card.id === id);
      if (item) {
        let priceValue = 0;
        if (typeof price === 'number') {
          priceValue = price;
        } else if (typeof price === 'string' && price.toLowerCase() === 'бесплатно') {
          priceValue = 0;
        }
        state.total -= priceValue;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;