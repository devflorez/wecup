import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { AuthStyles } from "./AuthStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type authScreenProp = StackNavigationProp<{
  SignUpScreen: undefined;
  SignInScreen: undefined;
  AuthScreen: undefined;
}>;
export const AuthScreen = () => {
  const Navigation = useNavigation<authScreenProp>();

  return (
    <View style={AuthStyles.containerAuth}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={AuthStyles.logo}
      />
      <View>
        <Pressable
         onPress={() => Navigation.navigate("SignInScreen")}
         style={AuthStyles.pressableLogin}>
          <Text style={AuthStyles.textLogin}>INICIAR SESIÓN</Text>
        </Pressable>
        <Pressable
          onPress={() => Navigation.navigate("SignUpScreen")}
          style={AuthStyles.pressableRegister}
        >
          <Text style={AuthStyles.textRegister}>REGISTRO</Text>
        </Pressable>
      </View>
    </View>
  );
};
