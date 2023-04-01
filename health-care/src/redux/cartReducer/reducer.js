let initial = {
  cart: [],
  total: JSON.parse(localStorage.getItem("total")) || 0,
};

export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "DELETE_CART": {
      return { ...state, cart: payload };
    }
    case "GET_DATA": {
      return { ...state, cart: payload };
    }
    case "CHANGE_QUANTITY": {
      return { ...state, cart: payload };
    }
    case "CALCULATE_PRICE": {
      return { ...state, total: payload };
    }
    default:
      return state;
  }
};
