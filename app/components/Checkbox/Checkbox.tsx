import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { CheckboxPropsInterface } from "./CheckboxInterface";
import { CheckboxStyles } from "./CheckboxStyles";
import Colors from "@app/constants/Colors";
export default function Checkbox({ check, text }: CheckboxPropsInterface) {
  return (
    <View style={CheckboxStyles.containerCheckbox}>
      <View style={CheckboxStyles.checkbox}>
        {check && <FontAwesome5 name="check" size={14} color={Colors.purple} />}
      </View>
      <Text style={CheckboxStyles.text}>{text}</Text>
    </View>
  );
}
