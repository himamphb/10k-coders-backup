import React from "react";
import { Outlet } from "react-router-dom";



export const Layout = () => {
  return (
    <div>
      <h2>welcome to Layout</h2>
      
      <Outlet />
    </div>
  );
};
