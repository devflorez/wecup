import { View, Text } from "react-native";
import React from "react";
import Colors from "@app/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { RegisterPhoneStyles } from "./RegisterPhoneStyles";
import InputPhone from "@app/components/InputPhone";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationType } from "@app/types/AuthNavigationType";
import usePhoneNumber from "@app/hooks/usePhoneNumber";

export default function RegisterPhone() {
  const Navigation = useNavigation<AuthNavigationType>();
  const { country, onChangePhone, phoneNumber, codeCountry } = usePhoneNumber();
  return (
    <View style={RegisterPhoneStyles.containerRegisterPhone}>
      <FontAwesome name="mobile-phone" size={104} color={Colors.purple} />
      <Text style={RegisterPhoneStyles.text}>
        Ingresa tu número de celular para continuar
      </Text>
      <InputPhone
        code={codeCountry}
        phone={phoneNumber}
        onChangeCode={onChangePhone}
        onChangeNumber={onChangePhone}
        country={country}
      />
      <View>
        <Text style={RegisterPhoneStyles.text}>¿Ya tienes cuenta?</Text>
        <Text
          style={RegisterPhoneStyles.textLogin}
          onPress={() => Navigation.navigate("SignInScreen")}
        >
          Iniciar sesión con usuario y contraseña
        </Text>
      </View>
    </View>
  );
}
