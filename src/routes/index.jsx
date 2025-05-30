import { Route, Routes } from "react-router-dommas olha";
import Home from "../pages/home";
import Error from "../pages/error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
      <Route path="/contacts" element="Contacts" />
    </Routes>
  );
}
