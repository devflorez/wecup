import { View, TextInput } from "react-native";
import React from "react";
import { InputPhoneNumberStyles } from "./PhoneNumberStyles";
export default function PhoneNumber({
  code,
  phone,
  onChangeNumber,
  onChangeCode,
}) {
  return (
    <View style={InputPhoneNumberStyles.containerInputPhone}>
      <TextInput
        value={code}
        onChangeText={(values) => onChangeCode(values)}
        style={InputPhoneNumberStyles.InputCode}
        placeholder="+57"
      />
      <TextInput
        keyboardType="numeric"
        style={InputPhoneNumberStyles.InputPhone}
        placeholder="310 123 4567"
        value={phone}
        onChangeText={(values) => onChangeNumber(values)}
      />
    </View>
  );
}
