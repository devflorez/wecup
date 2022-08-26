import { View, Text } from "react-native";
import React from "react";
import { ResultPropsInterface } from "./ResultInterface";
import { ResultStyles } from "./ResultStyles";
export default function Result({ text, children }: ResultPropsInterface) {
  return (
    <View style={ResultStyles.containerResult}>
      <Text style={ResultStyles.text}>{text}</Text>
      {children}
    </View>
  );
}
