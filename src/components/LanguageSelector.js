import React from 'react';
import PropTypes from 'prop-types';
import './LanguageSelector.css';
import {LANGUAGES} from '../service/constants';

const propTypes = {
    languageItems: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    handleLanguageClick: PropTypes.func.isRequired
};

const LanguageSelector = ({language, languageItems, handleLanguageClick}) => {
  const isActive = (lang) => `language ${LANGUAGES[lang]} ${lang===language ? 'active' : ''}`;

  return (
      <div className="LanguageSelector">
        <ul>
          {languageItems.map(({id, title}) =>
              (<li className={isActive(id)}
              title={title}
              onClick={()=>handleLanguageClick(id)}
              key={id}>{id}</li>
              )
            )
          }
        </ul>
    </div>
  )
};

LanguageSelector.propTypes = propTypes;


export default LanguageSelector;
