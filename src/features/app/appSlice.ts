import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/store';

export interface AppState {
  selectedPartnerId: string | null;
}

const initialState: AppState = {
  selectedPartnerId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedPartnerId(state, action: PayloadAction<string | null>) {
      state.selectedPartnerId = action.payload;
    },
  },
});

export const { setSelectedPartnerId } = appSlice.actions;

export const selectSelectedPartnerId = (state: RootState) => state.app.selectedPartnerId;

export const hydrateApp = () => (dispatch: AppDispatch) => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('selectedPartnerId') : null;
  if (stored) {
    dispatch(setSelectedPartnerId(stored));
  }
};

export default appSlice.reducer;
