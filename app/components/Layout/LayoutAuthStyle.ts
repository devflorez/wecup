import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
export const LayoutStyles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grayligth,
  },
  containerChildren:{
    backgroundColor: Colors.white,
    width:"90%",
    height:"86%",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#717171",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity:  0.23,
    shadowRadius: 11.78,
    elevation: 15
  }
});
