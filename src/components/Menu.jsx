/**
 * Reusable Navigation Menu Component
 *
 * A collapsible dropdown menu used throughout the application. Animates open
 * and closed, highlights the link matching the current route, and closes
 * automatically once an item is selected.
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of menu items with 'label' and 'path' properties
 * @param {string} props.title - Display title for the menu button
 */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/index.js";

const Menu = ({ items, title }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <div style={styles.menuContainer}>
      <button
        style={styles.menuButton}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <span
          style={{
            display: "inline-block",
            marginLeft: "0.5rem",
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "6px solid currentColor",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={styles.menuDropdown}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 0" }}>
              {items?.map((item, idx) => {
                const isActive = item.path === location.pathname;
                return (
                  <li key={item.label} style={{ margin: 0, padding: 0 }}>
                    <Link
                      to={item.path}
                      style={{
                        ...styles.menuItem,
                        ...(hovered === idx ? styles.menuItemHover : {}),
                        ...(isActive && hovered !== idx
                          ? { color: "#38b2ac", background: "rgba(56, 178, 172, 0.12)" }
                          : {}),
                        display: "block",
                        width: "100%",
                        textDecoration: "none",
                      }}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
