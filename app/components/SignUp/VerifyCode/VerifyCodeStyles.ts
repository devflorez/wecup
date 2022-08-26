import { Dimensions, StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const VerifyCodeStyles = StyleSheet.create({
  containerVerifyCode: {
    width: 300,
    height: Dimensions.get("window").height * 0.40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonResend: {
    borderColor: Colors.purple,
    borderWidth: 1,
    width: 186,
  },
  text: {
    fontFamily: "Teko",
    fontSize: 22,
    color: Colors.grayDark,
    textAlign: "center",
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:300
  },
});
