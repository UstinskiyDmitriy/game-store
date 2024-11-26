// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../slices/gameSlice';
import cartReducer from '../slices/cartSlice';
import authReducer from '../slices/authSlice'
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;