import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/features/auth/authApi';
import appReducer from '@/features/app/appSlice';
import { settingsApi } from '@/features/settings/settingsApi';
import { usersApi } from '@/features/users/usersApi';
import { customersApi } from '@/features/customers/customersApi';
import { billingGroupsApi } from '@/features/billingGroups/billingGroupsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [billingGroupsApi.reducerPath]: billingGroupsApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(
      authApi.middleware,
      settingsApi.middleware,
      usersApi.middleware,
      customersApi.middleware,
      billingGroupsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
