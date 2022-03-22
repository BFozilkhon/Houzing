import React, { useState, createContext, useContext } from "react";
import { useAxios } from "../hooks/useAxios";

export const AutheContext = createContext();
export const AuthContext = () => useContext(AutheContext);

export const Auth = ({ children }) => {
  const [logIn, setLogIn] = useState(localStorage.getItem("token") || null);
  const { request } = useAxios();

  let login = (state, callback) => {
    request({
      url: "/public/auth/login",
      method: "post",
      body: state,
      includeToken: false,
    })
      .then((res) => {
        if (res?.data?.success) {
          localStorage.setItem("token", res?.data?.data);
          setLogIn(res?.data?.data);
          callback();
        }
      })
      .catch((err) => {
        setLogIn(null);

        return err;
      });
  };

  return (
    <AutheContext.Provider value={{ logIn, login }}>
      {children}
    </AutheContext.Provider>
  );
};

export default Auth;
