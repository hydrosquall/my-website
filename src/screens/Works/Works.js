import React from 'react';
import * as PropTypes from 'prop-types';
import { SectionWithSensor } from '../../components';
import './Works.css';

import Web from './Web';
import Graphic from './Graphic';
import Conferences from './Conferences';

const Works = ({
  data, media, onChangeVisibility = () => {}, isVisible, goToMicrosoft,
}) => (
  <SectionWithSensor onChangeVisibility={onChangeVisibility} id={data.id} title={data.title} className="Works" isVisible={isVisible}>
    <Web data={data.webDevelopment} className="work" key={1} />
    <Graphic data={data.graphic} className="work" key={2} goToMicrosoft={goToMicrosoft} />
    <Conferences
      data={data.conferences}
      media={media}
      className="work"
      key={3}
    />
  </SectionWithSensor>
);

Works.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    webDevelopment: PropTypes.exact({
      image: PropTypes.exact({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
      project: PropTypes.string.isRequired,
      infos: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    conferences: PropTypes.exact({
      content: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
    }).isRequired,
    graphic: PropTypes.exact({
      image: PropTypes.exact({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
      content: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
      otherContent: PropTypes.string,
    }).isRequired,
  }),
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
      date: PropTypes.string,
    }),
  ).isRequired,
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
  goToMicrosoft: PropTypes.func,
};

export default Works;
