import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initState = JSON.parse(localStorage.getItem("UserDetails")) || {
isLoggedIn: false,
firstname: "",
lastname: "",
email: "",
  token: "",
msg:"",
isLoading: false,
isError: true,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
msg:payload.msg,
        token: payload.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT_SUCCESS: {
      return {
        isLoggedIn: false,
        firstname: "",
        lastname: "",
        email: "",
        token: "",
msg:"",
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
};

export { reducer };
