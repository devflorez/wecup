import { View, Text, Pressable } from "react-native";
import React from "react";
import { ButtonPropsInterface } from "./ButtonInterface";
import { ButtonStyles } from "./ButtonStyles";
import Colors from "@app/constants/Colors";
export default function Button({
  onPress,
  styleContainer,
  children,
  backgroundColor,
  textColor,
  styleText,
  text,
  disabled,
}: ButtonPropsInterface) {
  const stylesContainerDefault = {
    ...ButtonStyles.pressableButton,
    backgroundColor: disabled
      ? Colors.purpleInactive
      : backgroundColor
      ? backgroundColor
      : ButtonStyles.pressableButton.backgroundColor,
    ...styleContainer,
  };
  const stylesTextDefault = {
    ...ButtonStyles.textButton,
    color: textColor ? textColor : ButtonStyles.textButton.color,
  };
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={stylesContainerDefault}
    >
      {children}
      <Text style={styleText ? styleText : stylesTextDefault}>{text}</Text>
    </Pressable>
  );
}
