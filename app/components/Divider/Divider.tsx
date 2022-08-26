import { View, Text } from "react-native";
import React from "react";
import { DividerPropsInterface } from "./DividerInterface";
import { DividerStyles } from "./DIviderStyles";
export default function Divider({ text }: DividerPropsInterface) {
  return (
    <View style={DividerStyles.containerDivider}>
      <View style={DividerStyles.lineDivider} />
      {text && <Text style={DividerStyles.textDivider}>{text}</Text>}
      <View style={DividerStyles.lineDivider} />
    </View>
  );
}
