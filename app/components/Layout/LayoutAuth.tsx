import { View,ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { LayoutStyles } from "./LayoutAuthStyle";
import { LayoutAuthPropsInterface } from "./LayoutAuthInterface";
import Colors from "@app/constants/Colors";
export default function LayoutAuth({
  children,
  style,
}: LayoutAuthPropsInterface) {
  const stylesChildren = {
    ...LayoutStyles.containerChildren,
    ...style,
  };
  return (
    <SafeAreaView style={LayoutStyles.containerSafeArea}>
      <View style={LayoutStyles.containerLayout}>
        <ScrollView contentContainerStyle={stylesChildren}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
