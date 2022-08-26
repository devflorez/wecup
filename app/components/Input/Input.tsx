import { View, TextInput } from "react-native";
import React from "react";
import { InputPropsInterface } from "./InputInterface";
import { InputStyles } from "./InputStyles";
export default function Input({
  children,
  style,
  onChange,
  placeholder,
  value,
  isPassword,
  defaultValue
}: InputPropsInterface) {
  return (
    <View style={InputStyles.containerInput}>
      <TextInput
        style={InputStyles.textInput}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isPassword}
        defaultValue={defaultValue}
      />
      {children}
    </View>
  );
}
