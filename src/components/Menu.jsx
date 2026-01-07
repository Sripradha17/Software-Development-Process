/**
 * Reusable Navigation Menu Component
 * 
 * A collapsible dropdown menu that can be used throughout the application.
 * Features hover effects, automatic closing on item selection, and responsive design.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of menu items with 'label' and 'path' properties
 * @param {string} props.title - Display title for the menu button
 */

// React imports for component functionality
import React, { useState } from 'react';    // Core React hooks for state management
import { Link } from 'react-router-dom';     // Router Link component for navigation
import styles from '../styles/index.js';     // Centralized styling configuration

/**
 * Menu Component
 * 
 * Creates a collapsible navigation menu with the following features:
 * - Toggle open/close functionality
 * - Hover effects for better UX
 * - Automatic menu closing after item selection
 * - Responsive styling with custom styles
 */
const Menu = ({ items, title }) => {
  // State for controlling menu visibility
  const [open, setOpen] = useState(false);        // Controls dropdown open/closed state
  
  // State for hover effects on menu items
  const [hovered, setHovered] = useState(null);   // Tracks which menu item is currently hovered

  return (
    // Main menu container with custom styling
    <div style={styles.menuContainer}>
      {/* Menu toggle button with hamburger icon */}
      <button 
        style={styles.menuButton} 
        onClick={() => setOpen(!open)}    // Toggle menu open/closed state
      >
        {title} &#9776;  {/* Title text with hamburger icon (≡) */}
      </button>
      
      {/* Conditional rendering of dropdown menu */}
      {open && (
        <ul style={{ 
          ...styles.menuDropdown,    // Base dropdown styles
          listStyle: 'none',         // Remove default list bullets
          margin: 0,                 // Reset default margins
          padding: 0                 // Reset default padding
        }}>
          {/* Map through menu items to create navigation links */}
          {items.map((item, idx) => (
            <li key={item.label} style={{ margin: 0, padding: 0 }}>
              <Link
                to={item.path}         // Navigation destination
                style={{
                  ...styles.menuItem,   // Base menu item styles
                  // Apply hover styles conditionally
                  ...(hovered === idx ? styles.menuItemHover : {}),
                  display: 'block',     // Full-width clickable area
                  width: '100%',        // Full container width
                  textDecoration: 'none', // Remove default link underline
                }}
                // Hover event handlers for visual feedback
                onMouseEnter={() => setHovered(idx)}    // Set hovered item index
                onMouseLeave={() => setHovered(null)}   // Clear hover state
                onClick={() => setOpen(false)}          // Close menu on item click
              >
                {item.label}  {/* Display menu item text */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
