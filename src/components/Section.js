import React from "react";
import PropTypes from "prop-types";
import SectionItem from "./SectionItem";
import ImageSection from "./ImageSection";
import MediaSection from "./MediaSection";
import "./Section.css";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  sectionItems: PropTypes.array,
  sectionImages: PropTypes.array
};

const Section = ({ id, title, sectionItems, media, type }) => {
  const mediaComponents = {
    images: ImageSection,
    media: MediaSection
  };
  const buildTitle = () => {
    return title ? (
      <div className="title">
        <h3>{title}</h3>
      </div>
    ) : null;
  };

  const buildTextSection = items => {
    return (
      <div className="content">
        {items.map((item, index) => {
          return <SectionItem {...item} key={index} />;
        })}
      </div>
    );
  };

  const Component = mediaComponents[type];

  return (
    <div id={id} className="Section">
      {buildTitle()}
      {sectionItems ? (
        buildTextSection(sectionItems)
      ) : (
        <Component media={media} />
      )}
    </div>
  );
};

Section.propTypes = propTypes;

export default Section;
