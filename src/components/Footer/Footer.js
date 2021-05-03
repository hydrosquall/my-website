import React from 'react';
import * as PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ data }) => {
  const clickableText = (
    <a href={data.url} target="_blank" rel="noopener noreferrer" key={2}>
      {data.author}
    </a>
  );
  const footerText = data.text.split('$author');
  return (
    <div className="Footer">
      {footerText[0] && <div key={1}>{footerText[0]}</div>}
      {clickableText}
      {footerText[1] && <div key={3}>{footerText[1]}</div>}
    </div>
  );
};

Footer.propTypes = {
  data: PropTypes.exact({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
export default Footer;
