import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const RegisterPhoneStyles = StyleSheet.create({
  containerRegisterPhone: {
    alignItems: "center",
    height:"50%",
    justifyContent:"space-between"
  },
  text: {
    color: Colors.grayText,
    fontSize: 22,
    fontFamily: "Teko",
    width: 242,
    textAlign: "center",
  },
  textLogin: {
    color: Colors.purple,
    fontSize: 20,
    fontFamily: "TekoRegular",
    width: 233,
    textAlign: "center",
  },
});
