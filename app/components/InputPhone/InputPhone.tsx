import { View, Text } from "react-native";
import React from "react";
import PhoneNumber from "./PhoneNumber";
import SelectCountry from "./SelectCountry";
import { InputPhoneStyles } from "./InputPhoneStyles";
import { InputPhonePropsInterface } from "./inputPhoneInterface";
export default function InputPhone({
  code,
  phone,
  onChangeCode,
  onChangeNumber,
  country,
}: InputPhonePropsInterface) {
  return (
    <View style={InputPhoneStyles.containerInputPhone}>
      <SelectCountry country={country} />
      <PhoneNumber
        code={code}
        phone={phone}
        onChangeCode={onChangeCode}
        onChangeNumber={onChangeNumber}
      />
    </View>
  );
}
