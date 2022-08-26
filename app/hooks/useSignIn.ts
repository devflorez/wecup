import { useState } from "react";
import { Alert } from "react-native";
import { Auth } from "aws-amplify";
const initialState = { username: "", password: "" };

export default function useSignIn() {
  const [formData, setFormData] = useState(initialState);
  const onChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const signIn = async (email: string, password: string) => {
    try {
      const response = await Auth.signIn(email, password);
      return response;
    } catch (error) {
      console.error("Error en el inicio de sesion", error);
      Alert.alert("Error", error.message);
    }
  };

  return {
    signIn,
    onChange,
    email: formData.username,
    password: formData.password,
  };
}
