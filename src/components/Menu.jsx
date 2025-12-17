import React, { useState } from 'react';
import styles from '../styles/index.js';

const Menu = ({ items, title }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.menuContainer}>
      <button style={styles.menuButton} onClick={() => setOpen(!open)}>
        {title} &#9776;
      </button>
      {open && (
        <ul style={{ ...styles.menuDropdown, listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item, idx) => (
            <li key={item.label} style={{ margin: 0, padding: 0 }}>
              <a
                href={item.path}
                style={{
                  ...styles.menuItem,
                  ...(hovered === idx ? styles.menuItemHover : {}),
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
