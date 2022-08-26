import Navigation from "./app/navigations/Navigation";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Amplify, Auth } from "aws-amplify";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useCallback } from "react";
import Colors from "./app/constants/Colors";
import config from "./aws-exports";
Amplify.configure(config);
import { AuthProvider } from "@app/providers/AuthProvider";
export default function App() {
  
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Teko: require("./assets/fonts/Teko.ttf"),
    TekoLight: require("./assets/fonts/Teko-Light.ttf"),
    TekoRegular: require("./assets/fonts/Teko-Regular.ttf"),
    TekoBold: require("./assets/fonts/Teko-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthProvider>
      <Navigation />
      <StatusBar style="light" />
    </AuthProvider>
  );
}
