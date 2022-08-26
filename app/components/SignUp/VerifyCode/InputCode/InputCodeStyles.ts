import { Dimensions, StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const InputCodeStyles = StyleSheet.create({
  containerInput: {
    width: 67,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary,
    backgroundColor: Colors.grayInput,
    borderWidth: 1,

    borderRadius:12
  },
  input: {
    color: Colors.grayDark,
    fontSize: 36,
  },
});
