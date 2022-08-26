export const initialStateAuth = {
  isloading: false,
  user: {
    email: "",
    phoneNumber: "",
    username: "",
  },
  isAuth: false,
  result: "initial",
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        result: action.payload.result,
      };
    case "SET_AUTH":
      return {
        ...state,
        isAuth: action.payload,
      };
  }
}
