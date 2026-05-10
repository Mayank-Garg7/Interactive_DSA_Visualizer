import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "text-green-400 font-bold";
  const normalStyle = "text-white hover:text-green-400";

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">DSA Visual Lab</h1>

      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Home
        </NavLink>

        <NavLink to="/info" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Info
        </NavLink>

        <NavLink to="/practice" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Practice
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;