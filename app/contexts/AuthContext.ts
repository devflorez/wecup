import { CountryType } from "@app/types/countryType";
import { createContext } from "react";

type AuthContextType = {
  isLoading: boolean;
  isAuth: boolean;
  result: string;
  login: () => Promise<object>;
  logout: () => void;
  register: () => Promise<object>;
  email: string;
  password: string;
  onChangeLogin: (value: string, name: string) => void;
  country: CountryType;
  onChangePhone: (value: string, name: string) => void;
  onChangeCountry: (country: CountryType) => void;
  phoneNumber: string;
  codeCountry: string;
  passwordNewUser: string;
  emailNewUser: string;
  onChangeSignUp: (values: string | boolean, name: string) => void;
  newUser: {
    username: string;
    phone_number: string | undefined;
    password: string;
    repeatPassword: string;
    termAndConditions: boolean;
    commercialCommunications: boolean;
  };
  progress: string[];
  nextCurrent: (current: string) => void;
  currentStep: string;
  resendConfirmation: () => void;
  codeConfirmation: {
    cod1: string;
    cod2: string;
    cod3: string;
    cod4: string;
    cod5: string;
    cod6: string;
  };
  onChangeFormCode: (code: String, name:string) => void;
  confirmUser:()=>Promise<Object>;
  finishedSignUp: ()=>void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
