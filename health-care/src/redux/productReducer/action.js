import axios from "axios";
import {
  ADD_PRODUCT_CART_SUCCESS,
  GET_PRODUCT_SUCCEESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(
      `https://wild-pink-slug-sock.cyclic.app/multivitamins?_limit=8`,
      paramObj
    )
    .then((res) => {
      let obj = {
        data: res.data,
        total: res.headers.get("x-total-count"),
      };
      dispatch({ type: GET_PRODUCT_SUCCEESS, payload: obj });
    
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
      console.log(err);
    });
};


