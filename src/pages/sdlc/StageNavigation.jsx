import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles";

const stageLinks = [
  { path: "/planning", label: "Planning" },
  { path: "/analysis", label: "Analysis" },
  { path: "/design", label: "Design" },
  { path: "/implementation", label: "Implementation" },
  { path: "/testing", label: "Testing" },
  { path: "/deployment", label: "Deployment" },
  { path: "/maintenance", label: "Maintenance" },
  { path: "/review", label: "Review" },
];

const StageNavigation = () => {
  const location = useNavigate();
  return (
    <>
      <nav style={styles.chapterControls}>
        {stageLinks.map((stage) => (
          <Link
            key={stage.path}
            to={stage.path}
            style={{
              ...styles.navButton,
              ...(location.pathname === stage.path ? styles.navItemActive : {}),
            }}
          >
            {stage.label}
          </Link>
        ))}
      </nav>
      <div style={{ height: '40px' }} />
    </>
  );
};

export default StageNavigation;
