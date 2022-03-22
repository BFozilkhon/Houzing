import React from "react";
import { Outlet } from "react-router-dom";
import { data } from "../../utils/navbar";
import { Wrap } from "./style";

export const Navbar = () => {
  return (
    <>
      <Wrap>
        <Wrap.LogoWrap>
          <Wrap.NavLink to="/home">
            <Wrap.Logo />
            <span>Houzing</span>
          </Wrap.NavLink>
        </Wrap.LogoWrap>
        <Wrap.Ul>
          {data.map(
            (value) =>
              !value?.hidden && (
                <Wrap.Li key={value?.id}>
                  <Wrap.NavLink to={value?.pathname}>
                    {value?.title}
                  </Wrap.NavLink>
                </Wrap.Li>
              )
          )}
        </Wrap.Ul>
      </Wrap>
      <Outlet />
    </>
  );
};

export default Navbar;
