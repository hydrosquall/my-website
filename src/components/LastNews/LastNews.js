import React from 'react';
import PropTypes from "prop-types";
import './LastNews.css';

const propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.bool
    })
  )
}

const transformLink = (text, index) => {
  const wordToFind = "Node.js";
  const [phrase1, phrase2] = text.split(wordToFind);
  return [phrase1, wordToFind, phrase2].map(t => t===wordToFind ?
        <span key={`span-${index}`}>
            <i className="fab fa-node-js" key={index}/>Node.js</span> :
            t!=='' && <span key={index}>{t}
        </span>)
}



const transformContent = content => {
  const url = "https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md"
  return content.map(({text, link}, index) => link ? (
    <div key={index}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {transformLink(text, index)}
      </a>
    </div> ):
    (<div key={index}>
      <i className="fa fa-heart-o" aria-hidden="true"/>
      {text}
    </div>))
}

const LastNews = ({content}) =>
  (<div className="last-news">
    <div className="empty"></div>
    <div className="content">
      {transformContent(content)}
    </div>
  </div>);

LastNews.propTypes = propTypes;
export default LastNews;
