import Navigation from "./app/navigations/Navigation";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback } from "react";
import Colors from "./app/constants/Colors";
export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Teko: require("./assets/fonts/Teko.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Navigation />
      <StatusBar style="dark" />
    </>
  );
}
