import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Dimensions } from "react-native";
export const LayoutStyles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grayligth,
  },
  containerChildren:{
    backgroundColor: Colors.white,
    width:Dimensions.get('window').width * 0.90,
    minHeight : Dimensions.get('window').height* 0.85,
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
    elevation: 15,
    marginVertical:20
    
   
  },
  containerSafeArea:{
    flex: 1,
    backgroundColor: Colors.primary,
  }
});
