import axios from "axios";

export let getDataAction = async (dispatch) => {
  let res = await axios.get(`https://poised-red-shrimp.cyclic.app/cart`);
  localStorage.setItem("cart", JSON.stringify(res.data));
  let sum = 0;
  res.data.filter((el) => {
    sum += el.price * el.quantity;
  });
  localStorage.setItem("total", JSON.stringify(sum));
  dispatch({ type: "GET_DATA", payload: res.data });
  dispatch({ type: "CALCULATE_PRICE", payload: sum });
  return res.data;
};
// export let deleteAction = (id) => (dispatch) => {
//   axios
//     .delete(`https://poised-red-shrimp.cyclic.app/cart/${id}`)
//     .finally((res) => {
//       dispatch(getDataAction);
//     });
// };

export let deleteAction = (id) =>  {
 return axios.delete(`https://poised-red-shrimp.cyclic.app/cart/${id}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
};

export let changeQuantityAction = (value, id) => (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  axios
    .patch(`https://poised-red-shrimp.cyclic.app/cart/${id}`, {
      quantity: +value,
    })
    .finally((res) => {
      dispatch(getDataAction);
    });
};

export const resetAction=(dispatch)=>{
  dispatch({type:"RESET"})
}