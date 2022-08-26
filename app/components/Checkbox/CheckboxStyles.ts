import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const CheckboxStyles = StyleSheet.create({
  containerCheckbox: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:10
  },
  checkbox: {
    height: 30,
    width: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.grayligth,
    backgroundColor: Colors.grayInput,
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    color: Colors.grayText,
    fontSize: 18,
    fontFamily: "TekoLight",
    textAlign: "justify",
    width:256
  },
});
