export interface User {
  email: string;
  password: string;
  isAuth: boolean;
}

export interface UserState {
  users: User[];
  currentUser: User | null;
}

export type UserAction = 
  | { type: 'ADD_USER'; payload: User }
  | { type: 'SET_CURRENT_USER'; payload: User | null }
  | { type: 'LOGOUT' };