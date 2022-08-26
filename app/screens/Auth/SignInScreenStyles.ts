import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const SignInStyles = StyleSheet.create({
  containerIcon: {
    borderRadius: 33,
    width: 107,
    height: 107,
    backgroundColor: Colors.purple,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#717171",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.43,
    shadowRadius: 11.78,
    elevation: 15,
  },
  containerActionsInfo: {
    textAlign: "left",
    width: 300,
    marginVertical: 27,
  },
  textRecoverPassword: {
    color: Colors.secondary,
    fontFamily: "Teko",
    fontSize: 18,
  },
  textSignUp:{
    fontFamily: "TekoLight",
    fontWeight: "100",
    fontSize: 18,
    color:Colors.gray
  },
  textSignUpAction:{
    fontFamily: "Teko",
    textDecorationLine:"underline"
  },
  layoutConatiner: {
    justifyContent: "space-evenly"
  }
});
