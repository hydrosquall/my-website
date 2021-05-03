/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './LastNews.css';

const transformLink = (text, index) => {
  const wordToFind = 'Node.js';
  const [phrase1, phrase2] = text.split(wordToFind);
  return [phrase1, wordToFind, phrase2].map((t) => (t === wordToFind
    ? (
      <span key={`span-${index}`}>
        <i className="fab fa-node-js" key={index} />
        Node.js
      </span>
    )
    : t !== '' && (
    <span key={index}>
      {t}
    </span>
    )));
};

const transformContent = ([first, second, last], onReadClick) => {
  const url = 'https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md';
  return (
    <>
      {[first, second].map(({ text, link }, index) => (link ? (
        <div key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {transformLink(text, index)}
          </a>
        </div>
      )
        : (
          <div key={index}>
            {text}
          </div>
        )))}
      <div className="read-article" onClick={onReadClick} role="presentation">
        {last.text}
        <i className="fa fa-heart" aria-hidden="true" />
      </div>
    </>
  );
};

const LastNews = ({ content, goToArticle = () => {} }) => (
  <div className="last-news">
    <div className="empty" />
    <div className="content">
      {transformContent(content, goToArticle)}
    </div>
  </div>
);

LastNews.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.bool,
    }),
  ),
  goToArticle: PropTypes.func,
};
export default LastNews;
