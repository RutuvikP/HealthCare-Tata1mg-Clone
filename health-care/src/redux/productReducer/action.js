import axios from "axios";
import {
  GET_PRODUCT_SUCCEESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://poised-red-shrimp.cyclic.app/multivitamins", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCEESS, payload: res.data });
      //console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
      console.log(err);
    });
};
