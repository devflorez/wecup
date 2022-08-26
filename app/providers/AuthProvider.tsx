import { ReactNode, useReducer } from "react";
import { initialStateAuth, AuthReducer } from "@app/reducers/AuthReducer";
import AuthContext from "@app/contexts/AuthContext";
import useSignIn from "@app/hooks/useSignIn";
import usePhoneNumber from "@app/hooks/usePhoneNumber";
import useSignUp from "@app/hooks/useSignUp";
import useStep from "@app/hooks/useStep";
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialStateAuth);
  const { signIn, onChange, email, password } = useSignIn();
  const {
    singUp,
    newUser,
    emailNewUser,
    passwordNewUser,
    onChangeForm,
    resendConfirmationCode,
    onChangeFormCode,
    confirmCode,
    confirmSignUp,
  } = useSignUp();
  const { phoneNumber, codeCountry, country, onChangeCountry, onChangePhone } =
    usePhoneNumber();
  const { currentStep, nextCurrent, progress } = useStep();
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
  const register = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    const response = await singUp(
      emailNewUser,
      passwordNewUser,
      newUser.phone_number
    );
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (!response) return;
    

    nextCurrent("Result");
  };
  const resendConfirmation = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    const response = await resendConfirmationCode(newUser.username);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (!response) return;
   
  };
  const confirmUser = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let code =
      confirmCode.cod1 +
      confirmCode.cod2 +
      confirmCode.cod3 +
      confirmCode.cod4 +
      confirmCode.cod5 +
      confirmCode.cod6;
    const response = await confirmSignUp(newUser.username, code);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (!response) return;
    dispatch({
      type: "SET_USER",
      payload: {
        user: response,
        result: "success",
      },
    });
  };

  const finishedSignUp = () => {
    dispatch({
      type: "SET_AUTH",
      payload: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        email,
        password,
        phoneNumber,
        codeCountry,
        country,
        emailNewUser,
        passwordNewUser,
        newUser,
        progress,
        currentStep,
        codeConfirmation: confirmCode,
        nextCurrent,
        login,
        onChangeLogin: onChange,
        onChangeCountry,
        onChangePhone,
        register,
        onChangeSignUp: onChangeForm,
        resendConfirmation,
        onChangeFormCode,
        confirmUser,
        finishedSignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
