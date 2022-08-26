import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const SelectCountryStyles = StyleSheet.create({
  containerSelectCountry: {
    height: 44,
    width: 65,
    borderRadius: 7,
    borderColor: Colors.grayligth,
    borderWidth: 1,
    backgroundColor: Colors.grayInput,
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
    justifyContent: "space-between",
  },
  imageCountry: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
