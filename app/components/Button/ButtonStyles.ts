import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const ButtonStyles = StyleSheet.create({
  pressableButton: {
    marginTop: 9,
    backgroundColor: Colors.primary,
    width: 300,
    height: 44,
    borderRadius: 7,
    justifyContent: "center",
  },
  textButton: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Teko",
  },
});
