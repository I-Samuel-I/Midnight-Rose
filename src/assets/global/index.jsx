import { useEffect } from "react";
import Lenis from "lenis";
import Home from "../../pages/home";
import AppRoutes from "../../routes";

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
