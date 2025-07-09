import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/features/auth/authApi';
import appReducer from '@/features/app/appSlice';
import { settingsApi } from '@/features/settings/settingsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(authApi.middleware, settingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
