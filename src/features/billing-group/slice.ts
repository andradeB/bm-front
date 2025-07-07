import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBillingGroups } from "./api";

export interface BillingGroup {
  id: string;
  descricao: string;
}

interface BillingGroupState {
  items: BillingGroup[];
  total: number;
  loading: boolean;
}

const initialState: BillingGroupState = {
  items: [],
  total: 0,
  loading: false,
};

export const fetchBillingGroups = createAsyncThunk(
  "billingGroup/fetch",
  async (params: { search: string; filter: string; page: number }) => {
    const data = await getBillingGroups(params);
    return data as { items: BillingGroup[]; total: number };
  },
);

const billingGroupSlice = createSlice({
  name: "billingGroup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillingGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBillingGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchBillingGroups.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default billingGroupSlice.reducer;
