import { Dimensions, StyleSheet } from "react-native";
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
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.grayligth,
    width: 300,
    borderRadius: 5,
    padding: 5,
    justifyContent: "space-between",
  },
  itemCountry: {
    flexDirection: "row",

    height: 30,
    margin: 10,
    justifyContent:"space-between"
  },
  textCode: {
    fontFamily: "Teko",
    fontSize: 18,
    color: Colors.grayDark,
    textAlign: "left",

  },
  textName: {
    fontFamily: "Teko",
    fontSize: 20,
    color: Colors.grayDark,
    textAlign: "right",

  },
});
