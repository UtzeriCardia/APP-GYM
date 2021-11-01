const initialState = {
  login: false,
  logout: true,
};
const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        login: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        logout: payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
