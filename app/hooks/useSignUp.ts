import { Alert } from "react-native";

import { Auth } from "aws-amplify";
import { useState } from "react";

const initialValues = {
  phone_number: "",
  email: "",
  password: "",
  repeatPassword: "",
};
export default function useSignUp() {
  const [formData, setFormData] = useState(initialValues);
  const onChangeForm = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const singUp = async () => {
    try {
      const response = await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          emai: formData.email,
          phone_number: formData.phone_number,
        },
        validationData: [],
      });
      console.log(response);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", error.message);
    }
  };
  return {
    onChangeForm,
    singUp,
    ...formData
  }
}
