import { Route, Routes } from "react-router-dom";
import { AllAuthorizes, Authorizes } from "../components/protected/Authorizes";
import Protected from "../components/protected/Protected";
import Layout from "../layout/index";
import About from "../pages/about/About";
import Admission from "../pages/admission/Admission";
import SuccessAdmission from "../pages/admission/SuccessAdmission";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<Authorizes Cmp={About} />} />
        <Route path="/contact" element={<AllAuthorizes Cmp={Contact} />} />
        <Route path="/admission" element={<Protected Cmp={Admission} />} />
        <Route path="/success/admission" element={<SuccessAdmission />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
