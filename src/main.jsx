/**
 * Application Entry Point
 * 
 * This file bootstraps the React application and mounts it to the DOM.
 * It sets up the root-level React components and applies global styling.
 */

// React imports for application rendering
import { StrictMode } from "react";         // Enables additional development checks and warnings
import { createRoot } from "react-dom/client"; // New React 18 root API for improved performance

// Global styling
import "./index.css";                       // Application-wide CSS styles

// Main application component
import App from "./App.jsx";                // Root component with all routing and page structure

/**
 * Application Bootstrap
 * 
 * Creates the React root and renders the application with StrictMode enabled.
 * StrictMode helps identify potential problems in development by:
 * - Detecting components with unsafe lifecycles
 * - Warning about legacy string ref API usage
 * - Warning about deprecated findDOMNode usage
 * - Detecting unexpected side effects
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />          {/* Main application component */}
  </StrictMode>
);
