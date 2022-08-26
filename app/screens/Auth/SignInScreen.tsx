import { View, Text, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import LayoutAuth from "@app/components/Layout";
import Input from "@app/components/Input";
import Button from "@app/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { SignInStyles } from "./SignInScreenStyles";
import Colors from "@app/constants/Colors";
import useSignIn from "@app/hooks/useSignIn";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthNavigationType } from "@app/types/AuthNavigationType";
import AuthContext from "@app/contexts/AuthContext";

export const SignInScreen = () => {
  const { login, onChangeLogin, email, password } = useContext(AuthContext);
  const Navigation = useNavigation<AuthNavigationType>();
  return (
    <LayoutAuth style={SignInStyles.layoutConatiner}>
      <View style={SignInStyles.containerIcon}>
        <FontAwesome name="user-o" size={44} color="white" />
      </View>

      <View>
        <Input
          onChange={(values) => onChangeLogin(values, "username")}
          value={email}
          placeholder="Usuario"
        />
        <Input
          onChange={(values) => onChangeLogin(values, "password")}
          value={password}
          placeholder="Contraseña"
        />
        <View style={SignInStyles.containerActionsInfo}>
          <Text style={SignInStyles.textRecoverPassword}>
            ¿Olvidaste tu contraseña?
          </Text>
          <Text style={SignInStyles.textSignUp}>
            Aun no tienes cuenta,
            <Text
              onPress={() => Navigation.navigate("SignUpScreen")}
              style={SignInStyles.textSignUpAction}
            >
              Registrate.
            </Text>
          </Text>
        </View>
      </View>

      <Button
        backgroundColor={Colors.purple}
        text="INICIAR SESIÓN"
        onPress={login}
        disabled={email.length === 0 || password.length === 0}
      />
    </LayoutAuth>
  );
};
