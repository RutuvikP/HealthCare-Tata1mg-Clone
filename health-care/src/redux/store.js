import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as adminReducer } from "./adminReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  adminReducer,
  cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
