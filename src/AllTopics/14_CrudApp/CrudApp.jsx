import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";

const CrudApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/all-users" element={<Users />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CrudApp;
