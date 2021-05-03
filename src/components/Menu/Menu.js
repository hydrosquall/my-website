import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Menu = ({
  selectedItem,
  language,
  languageItems,
  languageClickHandler,
  menuItems,
  selectItemHandler,
  closeData,
}) => {
  const getClass = (id) => `item ${selectedItem === id ? 'active' : ''}`;

  const buildItemContent = (item) => (item.imgClassName ? (
    <i className={`fa fa-2x ${item.imgClassName}`} />
  ) : (
    item.text
  ));

  const buildMenu = () => menuItems.map((item) => (
    <div
      className={getClass(item.id)}
      onClick={() => selectItemHandler(item.id)}
      key={item.id}
      role="menuitem"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      {item.target ? (
        <a href={`#${item.id}`} target={item.target}>
          {buildItemContent(item)}
        </a>
      ) : (
        <div>
          {buildItemContent(item)}
        </div>
      )}
    </div>
  ));

  return (
    <div className="Menu">
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
        languageItems={languageItems}
      />
      {menuItems && buildMenu()}
      {closeData && (
      <button className="closeButton" type="button" onClick={selectItemHandler}>
        <i className="fa fa-hand-o-left" />
        {closeData}
      </button>
      )}
    </div>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  language: PropTypes.string.isRequired,
  languageClickHandler: PropTypes.func.isRequired,
  languageItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedItem: PropTypes.string.isRequired,
  selectItemHandler: PropTypes.func.isRequired,
  closeData: PropTypes.string,
};

export default Menu;
