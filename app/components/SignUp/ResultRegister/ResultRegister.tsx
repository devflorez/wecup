import { View, Text, Image } from "react-native";
import React from "react";
import Result from "@app/components/Result";
import Button from "@app/components/Button";
import Colors from "@app/constants/Colors";
import { ResultRegisterStyles } from "./ResultRegisterStyles";
export default function ResultRegister() {
  return (
    <View style={ResultRegisterStyles.containerResultRegister}>
      <Text style={ResultRegisterStyles.restartRegisterText}>Volver a empezar</Text>
      <Result text="¡TU PERFIL ESTÁ HECHO!">
        <Image
          source={require("@assets/images/profileDefault.png")}
          style={{
            height: 173.33,
            width: 173.33,
          }}
        />
      </Result>
      <Button
        onPress={() => console.log("presiono")}
        text="CONTINUAR"
        backgroundColor={Colors.purple}
      />
    </View>
  );
}
