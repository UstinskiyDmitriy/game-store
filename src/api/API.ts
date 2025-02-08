import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/db.json';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});