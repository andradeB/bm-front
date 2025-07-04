import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './api';
import type { AuthState } from './types';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
  status: 'idle',
  error: null,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    const data = await login(username, password);
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erro';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
