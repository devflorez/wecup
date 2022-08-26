import { StyleSheet } from "react-native";
import Colors from "@app/constants/Colors";
export const DividerStyles = StyleSheet.create({
  containerDivider: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  lineDivider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.grayDark,
  },
  textDivider: {
    color: Colors.grayDark,
    marginHorizontal:9,
    fontFamily:"TekoLight",
    fontSize:22
  },
});
