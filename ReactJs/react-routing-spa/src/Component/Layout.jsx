import React from "react";
import { Outlet } from "react-router-dom";

import { Users } from "./Users";

export const Layout = () => {
  return (
    <div>
      <h2>welcome to Layout</h2>
      <Users/>
      <Outlet />
    </div>
  );
};
