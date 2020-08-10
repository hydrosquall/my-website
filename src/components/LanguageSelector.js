import React from 'react';
import PropTypes from 'prop-types';
import './LanguageSelector.css';

const languages = {
    EU: 'basque',
    ES: 'spanish',
    EN: 'english',
    FR: 'french'
};

const propTypes = {
    languageItems: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    handleLanguageClick: PropTypes.func.isRequired
};

const LanguageSelector = ({language, languageItems, handleLanguageClick}) => {
  const isActive = (lang) => {
      let className = 'language ' + languages[lang] + ' ';
      if(lang===language){
          className += 'active';
      }
      return className;
  };

  const buildLanguageItems = () => {
    return languageItems.map((item, index) => {
        return  <li className={isActive(item.id)}
                    title={item.title}
                    onClick={()=>handleLanguageClick(item.id)}
                    key={item.id}>{item.id}</li>
    })
  };

    return (
      <div className="LanguageSelector">
          <ul>
            {buildLanguageItems()}
          </ul>
      </div>
    )
};

LanguageSelector.propTypes = propTypes;


export default LanguageSelector;
