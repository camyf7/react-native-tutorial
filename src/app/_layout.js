import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFE4E1" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF69B4",
          },

          headerTintColor: "#FFFFFF",

          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },

          headerShadowVisible: false,

          contentStyle: {
            backgroundColor: "#FFF5F5",
          },

          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="signup"
          options={{
            headerShown: true,
            title: "Cadastro",
            headerBackTitle: "Voltar",
            headerBackVisible: true,
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}