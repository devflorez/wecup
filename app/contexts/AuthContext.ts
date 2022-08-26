import { createContext } from "react";

type AuthContextType = {
  isLoading: boolean;
  isAuth: boolean;
  login: () => Promise<object>;
  logout: () => void;
  signUp: () => Promise<object>;
  email: string,
  password: string,
  onChangeLogin:(value:string, name:string)=>void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
