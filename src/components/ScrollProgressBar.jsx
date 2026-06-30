/**
 * ScrollProgressBar
 *
 * Slim fixed bar at the very top of the viewport that fills as the user
 * scrolls down the current page - gives constant ambient feedback on how
 * far through a long phase page (planning, design, etc.) they are.
 */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: 2000,
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #38b2ac, #667eea)",
          boxShadow: "0 0 8px rgba(56, 178, 172, 0.8)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
