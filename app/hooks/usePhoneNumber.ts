
import { CountryType } from "@app/types/countryType";
import { useState } from "react";

const initialValues = {
  code: "",
  phone: "",
};
const initialCountry = {
  code: "",
  image: "",
  iso2: "",
};
export default function usePhoneNumber() {
  const [formData, setFormData] = useState(initialValues);
  const [country, setCountry] = useState(initialCountry);
  const onChangePhone = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onChangeCountry = (county: CountryType) => {
    setCountry(county);
  };
  return {
    onChangeCountry,
    onChangePhone,
   
    phoneNumber:formData.phone,
    codeCountry: formData.code,
    country
  };
}
