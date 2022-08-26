import { View, TextInput } from "react-native";
import React from "react";
import { InputPhoneNumberStyles } from "./PhoneNumberStyles";
export default function PhoneNumber({
  code,
  phone,
  onChangePhoneNumber,

}) {

  return (
    <View style={InputPhoneNumberStyles.containerInputPhone}>
      <TextInput
        value={code}
        onChangeText={(values) => onChangePhoneNumber(values, "code")}
        style={InputPhoneNumberStyles.InputCode}
        placeholder="+57"
      />
      <TextInput
        keyboardType="numeric"
        style={InputPhoneNumberStyles.InputPhone}
        placeholder="310 123 4567"
        value={phone}
        onChangeText={(values) => onChangePhoneNumber(values, "phone")}
      />
    </View>
  );
}
