import { Alert } from "react-native";

import { Auth } from "aws-amplify";
import { useState } from "react";

const initialValues = {
  phone_number: undefined,
  username: "",
  password: "",
  repeatPassword: "",
  termAndConditions: false,
  commercialCommunications: false,
};
const initialValuesCode = {
  cod1: "",
  cod2: "",
  cod3: "",
  cod4: "",
  cod5: "",
  cod6: "",
};
export default function useSignUp() {
  const [formData, setFormData] = useState(initialValues);
  const [formDataCode, setFormDataCode] = useState(initialValuesCode);

  const onChangeForm = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeFormCode = (value: string, name: string) => {
    setFormDataCode({
      ...formDataCode,
      [name]: value,
    });
  };
  const singUp = async (email, password, phone_number) => {
    try {
      const response = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          phone_number,
        },
        validationData: [],
      });
      return response;
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  const resendConfirmationCode = async (username) => {
    try {
      const response = await Auth.resendSignUp(username);
      return response;
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  const confirmSignUp = async (username, code) => {
    try {
      const response = await Auth.confirmSignUp(username, code);
      return response;
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };
  return {
    onChangeForm,
    singUp,
    confirmSignUp,
    resendConfirmationCode,
    onChangeFormCode,
    emailNewUser: formData.username,
    passwordNewUser: formData.password,
    newUser: formData,
    confirmCode: formDataCode,
  };
}
