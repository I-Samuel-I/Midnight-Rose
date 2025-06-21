import Lenis from "lenis";
import Home from "../../pages/home";
import AppRoutes from "../../routes";

import { useEffect } from "react";

export default function Main() {
 
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AppRoutes>
        <Home />
      </AppRoutes>
    </>
  );
}
