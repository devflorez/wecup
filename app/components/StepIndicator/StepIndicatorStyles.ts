import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const StepIndicatorStyles = StyleSheet.create({
  containerStep: {
    borderRadius: 7,
    width: 45,
    height: 45,
    backgroundColor: Colors.purpleInactive,
   
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
  textStep:{
    fontSize:22,
    color:Colors.white,
    fontFamily:"Teko"
  }
});
