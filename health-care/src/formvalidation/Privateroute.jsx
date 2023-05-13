import React from "react";

import { useSelector } from "react-redux";


import LoginPage from "./Login";
import { Cart } from "../Pages/Cart";
const PrivateRoute = ({ children }) => {
  const state = useSelector((store) => 
   
     store.authReducer);
  console.log("IS LoggedIn", state.isLoggedIn);
  if (state.msg!="login successfull") {
    return <LoginPage />;
  }
  if (state.msg == "login successfull"){
    return <Cart />;
  }

  return children;
};

export default PrivateRoute;
