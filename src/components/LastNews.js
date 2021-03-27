import React from 'react';
import PropTypes from "prop-types";
import './LastNews.css';

const propTypes = {
  content: PropTypes.string
}

const transformLink = text => {
  const wordToFind = "Node.js";
  const [phrase1, phrase2] = text.split(wordToFind);
  return [phrase1, wordToFind, phrase2].map(t => t===wordToFind ? <span><i class="fab fa-node-js"/>Node.js</span> : t!=='' && <span>{t}</span>)
}



const transformContent = content => {
  const url = "https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md"
  return content.map(({text, link}) => link ? (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {transformLink(text)}
      </a>
    </div> ):
    (<div>
      <i class="fa fa-heart-o" aria-hidden="true"/>
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
