import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-5 bg-violet-300 flex items-center justify-between">
      <div className="text-xl font-extrabold">CRUD-APP</div>

      <nav className="flex gap-5 font-semibold">
        <Link to={"/"}>Create-User</Link>
        <Link to={"/all-users"}>All-Users</Link>
      </nav>
    </header>
  );
};

export default Navbar;
