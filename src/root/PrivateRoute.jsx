import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const PrivateRoute = () => {
  let auth = AuthContext();
  return auth?.logIn ? <h1>My properties</h1> : <Navigate to={"/sell"} />;
};

export default PrivateRoute;
