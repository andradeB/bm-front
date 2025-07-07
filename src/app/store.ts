import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@features/auth/slice";
import billingGroupReducer from "@features/billing-group/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    billingGroup: billingGroupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
