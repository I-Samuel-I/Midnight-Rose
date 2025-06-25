import Home from "../pages/home";
import Error from "../pages/error";
import Contact from "../pages/contact";

import { Route, Routes} from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
