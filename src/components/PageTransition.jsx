/**
 * PageTransition
 *
 * Wraps a route's page component so navigating between routes fades/slides
 * instead of hard-cutting. Paired with AnimatePresence + location-keyed
 * Routes in App.jsx to get an exit animation on the outgoing page.
 */
import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.28, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
