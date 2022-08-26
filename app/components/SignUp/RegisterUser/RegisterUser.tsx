import { View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Input from "@app/components/Input";
import Divider from "@app/components/Divider";
import Button from "@app/components/Button";
import Checkbox from "@app/components/Checkbox/Checkbox";
import Colors from "@app/constants/Colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { RegisterUserStyles } from "./RegisterUserStyles";
import AuthContext from "@app/contexts/AuthContext";
export default function RegisterUser() {
  const { onChangeSignUp, newUser, codeCountry, phoneNumber } =
    useContext(AuthContext);
  return (
    <View style={RegisterUserStyles.containerRegisterUser}>
      <Input
        placeholder="Usuario"
        onChange={(values) => onChangeSignUp(values, "username")}
        value={newUser.username}
      />
      <Input
        placeholder="Teléfono"
        onChange={(values) => onChangeSignUp(values, "phone_number")}
        value={newUser.phone_number}
        defaultValue={codeCountry+phoneNumber}
      />
      <Input
        placeholder="Contraseña"
        onChange={(values) => onChangeSignUp(values, "password")}
        value={newUser.password}
        isPassword
      />
      <Input
        placeholder="Repetir contraseña"
        onChange={(values) => onChangeSignUp(values, "repeatPassword")}
        value={newUser.repeatPassword}
        isPassword
      />
      <Divider text="ó ingresa con" />
      <Button
        text="Iniciar sesión con Google"
        onPress={() => console.log("iniciar con goole")}
        backgroundColor={Colors.secondary}
        textColor={Colors.primary}
        styleContainer={RegisterUserStyles.buttonLoginProvider}
      >
        <AntDesign name="googleplus" size={30} color={Colors.primary} />
      </Button>
      <Button
        text="Iniciar sesión con Facebook"
        onPress={() => console.log("iniciar con goole")}
        backgroundColor={Colors.secondary}
        textColor={Colors.primary}
        styleContainer={RegisterUserStyles.buttonLoginProvider}
      >
        <FontAwesome name="twitch" size={30} color={Colors.primary} />
      </Button>
      <Button
        text="Iniciar sesión con Twitch"
        onPress={() => console.log("iniciar con goole")}
        backgroundColor={Colors.secondary}
        textColor={Colors.primary}
        styleContainer={RegisterUserStyles.buttonLoginProvider}
      >
        <FontAwesome name="facebook-square" size={30} color={Colors.primary} />
      </Button>
      <Checkbox
        onPress={() =>
          onChangeSignUp(!newUser.termAndConditions, "termAndConditions")
        }
        check={newUser.termAndConditions}
        text="Acepto las condiciones de uso y políticas de privacidad Acepto el envío de comunicaciones comerciales"
      />
      <Checkbox
        onPress={() =>
          onChangeSignUp(
            !newUser.commercialCommunications,
            "commercialCommunications"
          )
        }
        check={newUser.commercialCommunications}
        text="Acepto el envío de comunicaciones comerciales"
      />
    </View>
  );
}
