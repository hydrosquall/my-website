import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import LanguageSelector from "./LanguageSelector";

const propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  language: PropTypes.string.isRequired,
  languageClickHandler: PropTypes.func.isRequired,
  languageItems: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  selectItemHandler: PropTypes.func.isRequired,
  isClosable: PropTypes.string
};

const Menu = ({
  selectedItem,
  language,
  languageItems,
  languageClickHandler,
  menuItems,
  selectItemHandler,
  isClosable
}) => {
  const getClass = (id) => {
    return selectedItem === id ? "item active" : "item";
  };

  const buildMenu = () => {
    return menuItems.map((item) => {
      return (
        <div
          className={getClass(item.id)}
          onClick={() => selectItemHandler(item.id)}
          key={item.id}
        >
          {item.target ? (
            <a href={"#" + item.id} target={item.target}>
              {buildItemContent(item)}
            </a>
          ) : (
            <div>
              {buildItemContent(item)}
            </div>
          )}
        </div>
      );
    });
  };

  const buildItemContent = (item) => {
    return item.imgClassName ? (
      <i className={"fa fa-2x " + item.imgClassName}></i>
    ) : (
      item.text
    );
  };

  return (
    <div className="Menu">
      {
        <LanguageSelector
          language={language}
          handleLanguageClick={languageClickHandler}
          languageItems={languageItems}
        />
      }
      {menuItems && buildMenu()}
      {isClosable && <button className="closeButton" onClick={selectItemHandler}><i className="fa fa-hand-o-left"/>{isClosable}</button>}
    </div>
  );
};

Menu.propTypes = propTypes;

export default Menu;
