import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex flex-col justify-between">
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className="nav-text">
          Home
        </NavLink>
        <NavLink to="/cart" className="nav-text">
          Carts
        </NavLink>
        <NavLink to="/order" className="nav-text">
          Orders
        </NavLink>
      </nav>
      <div className="avatar placeholder self-center mb-3">
        <div className="bg-neutral text-neutral-content rounded-full w-8">
          <span className="text-xs">UI</span>
        </div>
      </div>
    </div>
  );
};
