import { View, Text, TextInput } from "react-native";
import React from "react";
import { LayoutStyles } from "./LayoutAuthStyle";
export default function LayoutAuth({ children }) {
  return (
    <View style={LayoutStyles.containerLayout}>
      <View style={LayoutStyles.containerChildren}>{children}</View>
    </View>
  );
}
