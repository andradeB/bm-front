import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/store';

export interface AuthState {
  token: string | null;
  partnerId: string | null;
}

const initialState: AuthState = {
  token: null,
  partnerId: null,
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
    setPartnerId(state, action: PayloadAction<string | null>) {
      state.partnerId = action.payload;
    },
  },
});

export const { setToken, clearToken, setPartnerId } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectPartnerId = (state: RootState) => state.auth.partnerId;

export const hydrateAuth = () => (dispatch: AppDispatch) => {
  if (typeof window === 'undefined') return;
  const token = localStorage.getItem('token');
  const partnerId = localStorage.getItem('partnerId');
  if (token) dispatch(setToken(token));
  if (partnerId) dispatch(setPartnerId(partnerId));
};

export default authSlice.reducer;
