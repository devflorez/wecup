import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const InputStyles = StyleSheet.create({
  containerInput: {
    width: 300,
    height: 44,
    borderRadius: 7,
    backgroundColor: Colors.grayligth,
    paddingHorizontal:12,
    paddingVertical: 6.5,
    marginVertical:7.5
    
  },
  textInput: {
    width:"100%",
    height:"100%",
    color: Colors.grayDark,
    fontSize:22,
    fontFamily:"Teko"
  }
});
