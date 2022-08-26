import { View, Text } from "react-native";
import React, { useState } from "react";
import Button from "@app/components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@app/constants/Colors";
import { VerifyCodeStyles } from "./VerifyCodeStyles";
import InputCode from "./InputCode";
export default function VerifyCode() {
  const [formData, setFormData] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  return (
    <View style={VerifyCodeStyles.containerVerifyCode}>
      <MaterialCommunityIcons
        name="cellphone-message"
        size={100}
        color={Colors.purple}
      />
      <View style={VerifyCodeStyles.containerInput}>
        <InputCode
          value={formData.code1}
          onChange={(values) => setFormData({ ...formData, code1: values })}
        />
        <InputCode
          value={formData.code2}
          onChange={(values) => setFormData({ ...formData, code2: values })}
        />
        <InputCode
          value={formData.code3}
          onChange={(values) => setFormData({ ...formData, code3: values })}
        />
        <InputCode
          value={formData.code4}
          onChange={(values) => setFormData({ ...formData, code4: values })}
        />
      </View>

      <View>
        <Text style={VerifyCodeStyles.text}>¿No recibió el código?</Text>
        <Button
          backgroundColor={Colors.white}
          textColor={Colors.grayDark}
          styleContainer={VerifyCodeStyles.buttonResend}
          text="REENVIAR"
          onPress={() => console.log("dioClick")}
        />
      </View>
    </View>
  );
}
