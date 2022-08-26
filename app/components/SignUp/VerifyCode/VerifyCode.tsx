import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import Button from "@app/components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@app/constants/Colors";
import { VerifyCodeStyles } from "./VerifyCodeStyles";
import InputCode from "./InputCode";
import AuthContext from "@app/contexts/AuthContext";
export default function VerifyCode() {
 
  const { newUser, resendConfirmation, codeConfirmation, onChangeFormCode } = useContext(AuthContext);
  return (
    <View style={VerifyCodeStyles.containerVerifyCode}>
      <MaterialCommunityIcons
        name="cellphone-message"
        size={100}
        color={Colors.purple}
      />
      <View style={VerifyCodeStyles.containerInput}>
   
      <InputCode
      value={codeConfirmation.cod1}
      onChange={(values) => onChangeFormCode(values, "cod1")}
    />
   
      
        <InputCode
          value={codeConfirmation.cod2}
          onChange={(values) => onChangeFormCode(values, "cod2")}
        />
        <InputCode
          value={codeConfirmation.cod3}
          onChange={(values) => onChangeFormCode(values, "cod3")}
        />
        <InputCode
          value={codeConfirmation.cod4}
          onChange={(values) => onChangeFormCode(values, "cod4")}
        />
        <InputCode
          value={codeConfirmation.cod5}
          onChange={(values) => onChangeFormCode(values, "cod5")}
        />
        <InputCode
          value={codeConfirmation.cod6}
          onChange={(values) => onChangeFormCode(values, "cod6")}
        />
      </View>
      <View>
        <Text style={VerifyCodeStyles.text}>¿No recibió el código?</Text>
        <Button
          backgroundColor={Colors.white}
          textColor={Colors.grayDark}
          styleContainer={VerifyCodeStyles.buttonResend}
          text="REENVIAR"
          onPress={() => resendConfirmation()}
        />
      </View>
    </View>
  );
}
