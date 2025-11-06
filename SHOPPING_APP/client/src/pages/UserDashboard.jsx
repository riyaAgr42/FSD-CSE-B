import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserDashboard;
