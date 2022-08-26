import { View, Text } from "react-native";
import React from "react";
import PhoneNumber from "./PhoneNumber";
import SelectCountry from "./SelectCountry";
import { InputPhoneStyles } from "./InputPhoneStyles";
import { InputPhonePropsInterface } from "./inputPhoneInterface";
export default function InputPhone({
  code,
  phone,
  onChangePhoneNumber,
  onChangeCountry,
  country,
}: InputPhonePropsInterface) {
  
  return (
    <View style={InputPhoneStyles.containerInputPhone}>
      <SelectCountry 
      onChangePhoneNumber={onChangePhoneNumber}
      country={country} onChangeCountry={onChangeCountry} />
      <PhoneNumber
        code={code}
        phone={phone}
        onChangePhoneNumber={onChangePhoneNumber}
      />
    </View>
  );
}
