"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { useEffect } from "react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { store } from "@/store";
import { useAppDispatch } from "@/store/hooks";
import { hydrateAuth } from "@/features/auth/authSlice";
import { hydrateApp } from "@/features/app/appSlice";

function SessionLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
    dispatch(hydrateApp());
  }, [dispatch]);

  return <>{children}</>;
}

export function Provider(props: ColorModeProviderProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} forcedTheme={"light"}>
          <SessionLoader>{props.children}</SessionLoader>
        </ColorModeProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
}
