import {
  GET_PRODUCT_SUCCEESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  total: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCEESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
        total: payload.total,
      };
    case PRODUCT_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
