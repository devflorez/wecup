import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "@app/constants/Colors";
import { SelectCountryStyles } from "./SelectCountryStyles";
import { CountryType } from "@app/types/countryType";
import { SelectCountryPropInterface } from "./SelectCountryInterface";
import Countrys from "@app/constants/Countrys";
export default function SelectCountry({
  country,
  onChangeCountry,
  onChangePhoneNumber,
}: SelectCountryPropInterface) {
  const [isVisible, setIsVisible] = useState(false);
  const onPress = (value) => {
    setIsVisible(false);
    onChangeCountry(value);
    onChangePhoneNumber(value.code, "code")
  };
  return (
    <>
      <TouchableOpacity
        style={SelectCountryStyles.containerSelectCountry}
        onPress={() => setIsVisible(true)}
      >
        <Image
          style={SelectCountryStyles.imageCountry}
          source={country.image}
        />
        <Entypo name="triangle-down" size={21} color={Colors.grayDark} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={SelectCountryStyles.modal}>
          <View style={SelectCountryStyles.modalContent}>
            {Countrys.map((country) => (
              <TouchableOpacity
                onPress={() => onPress(country)}
                key={country.iso2}
                style={SelectCountryStyles.itemCountry}
              >
                <Image
                  source={country.image}
                  style={SelectCountryStyles.imageCountry}
                />
                <Text style={SelectCountryStyles.textCode}>{country.code}</Text>
                <Text style={SelectCountryStyles.textName}>{country.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
