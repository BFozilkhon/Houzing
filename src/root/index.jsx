import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import { data } from "../utils/navbar";

export const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {data?.map(
          ({ id, pathname, Component, isPrivate }) =>
            !isPrivate && (
              <Route key={id} path={pathname} element={<Component />} />
            )
        )}
      </Routes>
    </>
  );
};

export default Root;
