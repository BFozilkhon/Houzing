import React, { useState } from "react";
import { AuthContext } from "../../context/auth";

const SellComponent = () => {
  const auth = AuthContext();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const onChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onLogin = () => {
    auth?.login(state, () => {});
  };
  return (
    <>
      {auth?.logIn ? (
        <h1>Tabrik sell ochildi</h1>
      ) : (
        <div>
          <input name="email" type="email" onChange={onChange} />
          <input name="password" type="password" onChange={onChange} />
          <button onClick={onLogin}>Login</button>
        </div>
      )}
    </>
  );
};

export default SellComponent;
