import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const InputPhoneNumberStyles = StyleSheet.create({
  containerInputPhone: {
    flexDirection: "row",
    backgroundColor: Colors.grayInput,
    width: 228,
    height: 44,
    borderRadius: 7,
    borderColor: Colors.grayligth,
    borderWidth: 1,
  },
  InputCode: {
    width: 53.5,
    color: Colors.grayDark,
    fontSize: 22,
    fontFamily: "Teko",
    borderRightWidth: 0.5,
    borderColor:Colors.grayligth,
    paddingTop:7,
    paddingBottom:6,
    paddingHorizontal:12
  },
  InputPhone: {
    width: 174.5,
    color: Colors.grayDark,
    fontSize: 22,
    fontFamily: "Teko",
    borderLeftWidth: 0.5,
    borderColor:Colors.grayligth,
    paddingTop:7,
    paddingBottom:6,
    paddingHorizontal:12
  },
});
