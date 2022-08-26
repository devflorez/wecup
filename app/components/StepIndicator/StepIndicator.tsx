import { View, Text } from "react-native";
import React from "react";
import { StepIndicatorStyles } from "./StepIndicatorStyles";
import Colors from "@app/constants/Colors";
import { StepIndicatorPropsInterface } from "./StepIndicatorInterface";
export default function StepIndicator({
  step,
  active,
}: StepIndicatorPropsInterface) {
  const isActive = {
    ...StepIndicatorStyles.containerStep,
    backgroundColor: active
      ? Colors.purple
      : StepIndicatorStyles.containerStep.backgroundColor,
  };

  return (
    <View style={isActive}>
      <Text style={StepIndicatorStyles.textStep}>{step}</Text>
    </View>
  );
}
