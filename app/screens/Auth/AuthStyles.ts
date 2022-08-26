import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const AuthStyles = StyleSheet.create({
  containerAuth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo:{
    width:200,
    height:200,
    marginBottom:100
  },
  pressableLogin: {
    backgroundColor: Colors.secondary,
    width: 274,
    height: 44,
    borderRadius: 7,
    justifyContent: "center",
    marginBottom: 8,
  },
  textLogin: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Teko"
    
  },
  pressableRegister: {
    marginTop: 9,
    backgroundColor: Colors.white,
    width: 274,
    height: 44,
    borderRadius: 7,
    justifyContent: "center",
  },
  textRegister: {
    color: Colors.primary,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Teko"
  },
});
