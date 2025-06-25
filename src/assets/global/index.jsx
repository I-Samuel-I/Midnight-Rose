
import Home from "../../pages/home";
import AppRoutes from "../../routes";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from "lenis";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      offset: 200,
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}
