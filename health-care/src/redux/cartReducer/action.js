import axios from "axios";

export let getDataAction = async (dispatch) => {
  let res = await axios.get(`https://poised-red-shrimp.cyclic.app/cart`);
  localStorage.setItem("cart", JSON.stringify(res.data));
  dispatch({ type: "GET_DATA", payload: res.data });
  return res.data;
};
export let deleteAction = (id) => (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  let sum = 0;
  arr = arr.filter((el) => {
    if (el.id != id) {
      sum += el.price * el.quantity;
      return el;
    }
  });
  localStorage.setItem("cart", JSON.stringify(arr));
  dispatch({ type: "CALCULATE_PRICE", payload: sum });
  dispatch({ type: "DELETE_CART", payload: arr });
};

export let changeQuantityAction = (value, id) => (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  let sum = 0;
  arr = arr.filter((el) => {
    if (el.id == id) {
      el.quantity = Number(value);
    }
    sum += el.price * el.quantity;
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(arr));
  dispatch({ type: "CALCULATE_PRICE", payload: sum });
  dispatch({ type: "CHANGE_QUANTITY", payload: arr });
};
