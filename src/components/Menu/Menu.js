import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Menu = ({
  selectedItem,
  language,
  languageItems,
  languageClickHandler = () => {},
  menuItems,
  selectItemHandler = () => {},
  closeData,
}) => {
  const getClass = (id) => `item ${selectedItem === id ? 'active' : ''}`;

  const buildItemContent = (text, imgClassName) => (imgClassName ? (
    <i className={`fa fa-2x ${imgClassName}`} />
  ) : (
    text
  ));

  const buildMenu = () => menuItems.map(({
    id, target, text, imgClassName,
  }) => (
    <div
      className={getClass(id)}
      onClick={() => selectItemHandler(id)}
      key={id}
      role="menuitem"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      {target ? (
        <a href={`#${id}`} target={target}>
          {buildItemContent(text, imgClassName)}
        </a>
      ) : (
        <div>
          {buildItemContent(text, imgClassName)}
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
      target: PropTypes.string,
      text: PropTypes.string.isRequired,
      imgClassName: PropTypes.string,
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
