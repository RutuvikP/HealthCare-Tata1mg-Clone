import * as types from "./admin.actionTypes";

const initialState = {
    loading: false,
    error: false,
    totalPages:0,
    multivitaminsData: [],
  };

export const reducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.GET_MULTIVITAMINS_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        multivitaminsData: payload,
      };
    default:
        return state;
  }
};
