// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../slices/gameSlice';
import cartReducer from '../slices/cartSlice';
import userReducer from '../slices/userSlice'
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;