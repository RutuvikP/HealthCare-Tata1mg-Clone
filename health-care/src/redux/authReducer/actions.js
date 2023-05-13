import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import { BASE_URL } from "../../contact/contect";


export const loginReqAction = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginFailAction = () => {
  return { type: LOGIN_FAILED };
};

export const login = (data) => (dispatch) => {
  dispatch(loginReqAction());
  return axios
    .post("http://localhost:8080/users/login", data)
    .then((res) => {
      console.log(res.data);
      dispatch(loginSuccessAction(res.data));
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({ isLoggedIn: true, ...res.data })
      );
      return res.data;
    })
    .catch((err) => {
      dispatch(loginFailAction());
      return err.response.data;
    });
}
  
  // axios
  //   .post("http://localhost:8080/users/login", data)
  //   .then((res) => {
  //     console.log(res.data.user);
  //     dispatch(loginSuccessAction(res.data.user));
  //     localStorage.setItem(
  //       "UserDetails",
  //       JSON.stringify({ isLoggedIn: true, ...res.data.user })
  //     );
  //     return res.data.user;
  //   })
  //   .catch((err) => {
  //     dispatch(loginFailAction());
  //     return err.response.data;
  //   });}

export const logout = () => {
  localStorage.setItem("UserDetails", null);
  return { type: LOGOUT_SUCCESS };
};
