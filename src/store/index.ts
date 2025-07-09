import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/features/auth/authApi';
import { usersApi } from '@/features/users/usersApi';
import { customersApi } from '@/features/customers/customersApi';
import { billingGroupsApi } from '@/features/billingGroups/billingGroupsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [billingGroupsApi.reducerPath]: billingGroupsApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(
      authApi.middleware,
      usersApi.middleware,
      customersApi.middleware,
      billingGroupsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
