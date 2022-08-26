export const initialStateAuth = {
  isloading: false,
  user: {
    email: "",
    phoneNumber: "",
    username: "",
  },
  isAuth: false,
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
        user: action.payload,
        isAuth: action.payload,
      };
  }
}
