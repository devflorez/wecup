import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "@app/components/Input";
import Divider from "@app/components/Divider";
import Button from "@app/components/Button";
import Checkbox from "@app/components/Checkbox/Checkbox";
import Colors from "@app/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { RegisterUserStyles } from "./RegisterUserStyles";
export default function RegisterUser() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  return (
    <View style={RegisterUserStyles.containerRegisterUser}>
      <Input
        placeholder="Usuario"
        onChange={(values) => setFormData({ ...formData, username: values })}
        value={formData.username}
      />
      <Input
        placeholder="Teléfono"
        onChange={(values) => setFormData({ ...formData, phone: values })}
        value={formData.phone}
      />
      <Input
        placeholder="Contraseña"
        onChange={(values) => setFormData({ ...formData, password: values })}
        value={formData.password}
      />
      <Input
        placeholder="Contraseña"
        onChange={(values) =>
          setFormData({ ...formData, repeatPassword: values })
        }
        value={formData.repeatPassword}
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
      />
      <Button
        text="Iniciar sesión con Twitch"
        onPress={() => console.log("iniciar con goole")}
        backgroundColor={Colors.secondary}
        textColor={Colors.primary}
      />
      <Checkbox
        check
        text="Acepto las condiciones de uso y políticas de privacidad Acepto el envío de comunicaciones comerciales"
      />
      <Checkbox text="Acepto el envío de comunicaciones comerciales" />
    </View>
  );
}
