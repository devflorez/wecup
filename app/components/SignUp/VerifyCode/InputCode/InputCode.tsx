import { View, TextInput } from "react-native";
import React from "react";
import { InputCodePropsInterface } from "./InputCodeInterface";
import { InputCodeStyles } from "./InputCodeStyles";
export default function InputCode({
  value,
  onChange,
}: InputCodePropsInterface) {
  return (
    <View style={InputCodeStyles.containerInput}>
      <TextInput
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
        style={InputCodeStyles.input}
        maxLength={1}
      />
    </View>
  );
}
