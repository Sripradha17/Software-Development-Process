/**
 * ScrollToTopButton
 *
 * Floating action button that appears once the user has scrolled past one
 * viewport height and smooth-scrolls back to the top of the page on click.
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(56, 178, 172, 0.5)",
            background: "linear-gradient(135deg, #38b2ac, #319795)",
            color: "#e2e8f0",
            fontSize: "1.1rem",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
            zIndex: 1500,
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
