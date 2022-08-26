import { ReactNode, useReducer } from "react";
import { initialStateAuth, AuthReducer } from "@app/reducers/AuthReducer";
import AuthContext from "@app/contexts/AuthContext";
import useSignIn from "@app/hooks/useSignIn";
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialStateAuth);
  const { signIn, onChange, email, password } = useSignIn();
  const login = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    const response = await signIn(email, password);
    if (!response) return;
    dispatch({
      type: "SET_USER",
      payload: {
        user: response,
        isAuth: true,
      },
    });
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, email, password, login, onChangeLogin: onChange }}
    >
      {children}
    </AuthContext.Provider>
  );
};
