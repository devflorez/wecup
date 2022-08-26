import { Dimensions, StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const ResultStyles = StyleSheet.create({
  containerResult: {
    justifyContent: "space-between",
    alignItems:"center",
    height:Dimensions.get("window").height *0.30
  },
  text: {
    fontFamily: "TekoBold",
    color: Colors.primary,
    textTransform: "uppercase",
    fontSize: 22,
  },
});
