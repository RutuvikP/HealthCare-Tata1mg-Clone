import React from "react";
import { UseAuth } from "./Authcontext";
import { Navigate } from "react-router-dom";

export const Protect = ({ children }) => {
  const { user } = UseAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
