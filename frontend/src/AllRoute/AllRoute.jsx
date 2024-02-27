import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/Dashboard";
import { Create } from "../Pages/Create";
import { About } from "../Pages/About";
import { Register } from "../Pages/Register";
import { Blog } from "../Pages/Blog";
import { useSelector } from "react-redux";

export const AllRoute = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { login } = useSelector((store) => store);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={login || token ? <Dashboard /> : <Navigate to={"/register"} />}
      />
      <Route
        path="/create"
        element={login || token ? <Create /> : <Navigate to={"/register"} />}
      />
      <Route path="/About" element={<About />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard/:id" element={<Blog />} />
    </Routes>
  );
};

