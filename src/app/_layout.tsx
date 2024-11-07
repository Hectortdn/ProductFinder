import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ThemeProvider } from "@shopify/restyle";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ModalDefault } from "@components";
import { theme } from "@theme";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalDefault />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)/index" />
          <Stack.Screen name="(app)/product-register" />
          <Stack.Screen name="(app)/product-details" />

          <Stack.Screen name="(app)/product-edit" />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
