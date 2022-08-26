import { View, Text, Image, Platform } from "react-native";
import React, { useContext } from "react";
import LayoutAuth from "@app/components/Layout/LayoutAuth";
import Button from "@app/components/Button";
import Colors from "@app/constants/Colors";

import StepIndicator from "@app/components/StepIndicator/StepIndicator";
import { SignUpStyles } from "./SignUpScreenStyles";
import RegisterPhone from "@app/components/SignUp/RegisterPhone";
import RegisterUser from "@app/components/SignUp/RegisterUser/RegisterUser";
import Result from "@app/components/Result";
import VerifyCode from "@app/components/SignUp/VerifyCode";
import ResultRegister from "@app/components/SignUp/ResultRegister";
import useStep from "@app/hooks/useStep";
import { useNavigation } from "@react-navigation/native";
import useSignUp from "@app/hooks/useSignUp";
import AuthContext from "@app/contexts/AuthContext";
export const SignUpScreen = () => {
  const {
    phoneNumber,
    codeCountry,
    newUser,
    register,
    nextCurrent,
    currentStep,
    progress,
    confirmUser,
    result,
  } = useContext(AuthContext);

  const Steps = {
    RegisterPhone: {
      component: <RegisterPhone />,
      onPress: () => nextCurrent("RegisterUser"),
      disabled: phoneNumber.length === 0 || codeCountry.length === 0,
      textButton: "CONTINUAR",
    },
    RegisterUser: {
      component: <RegisterUser />,
      onPress: () => register(),
      disabled: newUser.username.length === 0 || newUser.password.length === 0,
      textButton: "CREAR",
    },
    Result: {
      component: (
        <Result text="¡TU CUENTA HA SIDO CREADA!">
          <Image
            source={require("@assets/images/profileDefault.png")}
            style={{
              height: 173.33,
              width: 173.33,
            }}
          />
        </Result>
      ),
      onPress: () => nextCurrent("VerifyCode"),
      textButton: "COMPLETA PERFIL",
    },
    VerifyCode: {
      component: <VerifyCode />,
      onPress: () => confirmUser(),
      textButton: "VERIFICAR",
    },
  };

  if (result === "success")
    return (
      <LayoutAuth style={SignUpStyles.containerSignUp}>
        <ResultRegister />
      </LayoutAuth>
    );

  return (
    <LayoutAuth style={SignUpStyles.containerSignUp}>
      <View style={SignUpStyles.containerSteps}>
        {Object.keys(Steps).map((key, index) => {
          let isActive = progress.find((step) => step == key);
          return (
            <StepIndicator
              key={key}
              step={index + 1}
              active={isActive ? true : false}
            />
          );
        })}
      </View>
      {Steps[currentStep].component}
      <Button
        onPress={Steps[currentStep].onPress}
        text={Steps[currentStep].textButton}
        disabled={Steps[currentStep].disabled}
        backgroundColor={Colors.purple}
      />
    </LayoutAuth>
  );
};
