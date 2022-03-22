import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { data } from "../utils/navbar";
import PrivateRoute from "./PrivateRoute";

export const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {data?.map(
            ({ id, pathname, Component, isPrivate }) =>
              !isPrivate && (
                <Route key={id} path={pathname} element={<Component />} />
              )
          )}

          <Route path="/my-properties" element={<PrivateRoute />} />
        </Route>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};

export default Root;
