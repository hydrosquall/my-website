import React from 'react';
import PropTypes from 'prop-types';
import './item.css';

const propTypes = {
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string.isRequired,
    contentClassName: PropTypes.string,
    additionalContent: PropTypes.string
};

const SectionItem = ({mainTitle, subTitle, date, content, additionalContent, contentClassName}) => {
    const buildMainTitle = () => {
        return mainTitle ? <div className="header-maintitle">{mainTitle}</div>
                : null;
    };

    const buildSubtitle = () => {
        return subTitle ? <div className="header-subtitle">{subTitle}</div>
                : null;

    };

    const buildDate = () =>{
        return date ? <div className="header-date">{date}</div>
                : null;
    };

    const prettifyText = (text) => {
      return text.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
    };

    const buildAdditionalContent = () => {
        return additionalContent ? <p>{additionalContent}</p>
                : null;

    };

    const itemClassName = contentClassName ? "item-content " + contentClassName :  "item-content";
    return (
        <div className="item">
            <div className="item-header">
                <div className="header-title">
                    {buildMainTitle()}
                    {buildSubtitle()}
                </div>
                {buildDate()}
            </div>
            <div className={itemClassName}>
                {prettifyText(content)}
                {buildAdditionalContent()}
            </div>
        </div>
    )
}

SectionItem.propTypes = propTypes;

export default SectionItem;
