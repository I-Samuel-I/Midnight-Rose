import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Contact from "../pages/contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}
