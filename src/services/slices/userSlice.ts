import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  password: string;
  isAuth: boolean;
}

interface UserState {
  currentUser: User | null;
  error: string | null;
}

const initialState: UserState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null'),
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === action.payload.email);
      
      if (!user) {
        state.error = 'Пользователь не найден';
        return;
      }

      if (user.password !== action.payload.password) {
        state.error = 'Неверный пароль';
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(user));
      state.currentUser = user;
      state.error = null;
    },
    register: (state, action: PayloadAction<User>) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: User) => u.email === action.payload.email);
      
      if (existingUser) {
        state.error = 'Пользователь с такой почтой уже существует!';
        return;
      }

      users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      state.currentUser = action.payload;
      state.error = null;
    },
    logout: (state) => {
      localStorage.removeItem('currentUser');
      state.currentUser = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { login, register, logout, clearError } = userSlice.actions;
export default userSlice.reducer;
