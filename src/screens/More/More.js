import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../../components/Section";
import ImageSection from "../../components/ImageSection"

import './More.css'

const More = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="More">
        {data.sectionItems.map(
          ({ title, content, contentItems}, index) => (
            <div className="more" key={index}>
              <div className="more-title">{title}</div>
              {content && <div className="more-content">{content}</div>}
              {contentItems && <div className="more-content-items">
                {contentItems.map((item) => (
                  <div className="more-content-item">{item}</div>
                ))}
              </div>
              }
            </div>
          )
        )}
        <ImageSection />
      </Section>
    </VisibilitySensor>
  );
};

export default More;
