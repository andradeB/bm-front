import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/store';

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export const hydrateAuth = () => (dispatch: AppDispatch) => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (stored) {
    dispatch(setToken(stored));
  }
};

export default authSlice.reducer;
