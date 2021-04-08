import React, { useState } from "react";
import PropTypes from "prop-types";

import "./HamburgerMenu.css";

const propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func,
};
const Menu = ({ menuItems, active, onSelectItem = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getClassName = (id) => `menuItem ${id === active ? "active" : ""}`;
  const findActive = () => {
    return menuItems.find(({ id }) => id === active) || {};
  };
  const handleSelectItem = (id) => {
    onSelectItem(id);
    setMenuOpen(!menuOpen);
  };
  return (
    <nav role="navigation" className="HamburgerMenu">
      <div id="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          {menuItems.map(({ id, name }) => (
            <div
              key={id}
              className={getClassName(id)}
              onClick={() => handleSelectItem(id)}
            >
              <li>{name}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="activeText">{findActive().name}</div>
    </nav>
  );
};
Menu.propTypes = propTypes;
export default Menu;
