import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const SignUpStyles = StyleSheet.create({
  containerSteps: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
  },
  containerSignUp: {
    justifyContent: "space-evenly",
  },
  restartRegisterText: {
    color: Colors.secondary,
    fontSize: 18,
    fontFamily: "Teko",
    top: 0,
  },
  containerResultRegister: {
    height: "90%",
    justifyContent: "space-between",
  },
});
