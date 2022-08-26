import { View, Text, Image, Platform } from "react-native";
import React from "react";
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
export const SignUpScreen = () => {
  const { currentStep, nextCurrent, progress } = useStep();
  const {} = useSignUp();
  const Steps = {
    RegisterPhone: {
      component: <RegisterPhone />,
      onPress: () => console.log("toco"),
    },
    RegisterUser: {
      component: <RegisterUser />,
      onPress: () => console.log("toco"),
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
      onPress: () => console.log("toco"),
    },
    VerifyCode: {
      component: <VerifyCode />,
      onPress: () => console.log("toco"),
    },
  };
  const result = "initial";
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
          console.log(key);
          return (
            <StepIndicator
              key={key}
              step={index + 1}
              active={index === 0 ? true : progress[key]}
            />
          );
        })}
      </View>
      {Steps[currentStep].component}
      <Button
        onPress={() => console.log("presiono")}
        text="CONTINUAR"
        backgroundColor={Colors.purple}
      />
    </LayoutAuth>
  );
};
