import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "@app/constants/Colors";
import { SelectCountryStyles } from "./SelectCountryStyles";
import { CountryType } from "@app/types/countryType";
import { SelectCountryPropInterface } from "./SelectCountryInterface";
export default function SelectCountry({ country }: SelectCountryPropInterface) {
  return (
    <TouchableOpacity style={SelectCountryStyles.containerSelectCountry}>
      <Image style={SelectCountryStyles.imageCountry} source={country.image} />
      <Entypo name="triangle-down" size={21} color={Colors.grayDark} />
    </TouchableOpacity>
  );
}
