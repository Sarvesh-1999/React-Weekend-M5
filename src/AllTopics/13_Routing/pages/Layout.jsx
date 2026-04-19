import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      {/* Outlet is used to display children routes */}
      <Outlet />
    </div>
  );
};

export default Layout;
