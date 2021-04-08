import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

const Section = ({ id, title, className, children }) => {
  return (
    <div id={id} className={`Section ${className}`}>
      {title && (
        <div className="title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="content">{children}</div>
    </div>
  );
};

Section.propTypes = propTypes;

export default Section;
