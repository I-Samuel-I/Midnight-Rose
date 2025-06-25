import Error from "../pages/error";

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../pages/loading";

export default function AppRoutes() {
  const Home = lazy(() => import("../pages/home"));
  const Contact = lazy(() => import("../pages/contact"));
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}
