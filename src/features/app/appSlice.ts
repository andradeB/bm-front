import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

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

export const selectSelectedPartnerId = (state: RootState) =>
  state.app.selectedPartnerId;

export default appSlice.reducer;
