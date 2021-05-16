import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';
import './Works.css';

import Web from './Web';
import Graphic from './Graphic';
import Conferences from './Conferences';
import {
  jsonData,
} from '../../service';

const Works = ({
  id, onChangeVisibility = () => {}, isVisible, goToMicrosoft,
}) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} title={t(`${id}.title`)} className="Works" isVisible={isVisible}>
      <Web className="work" key={1} data={jsonData.works.developer} />
      <Graphic className="work" key={2} data={jsonData.works.graphic} goToMicrosoft={goToMicrosoft} />
      <Conferences
        media={jsonData.talks}
        className="work"
        key={3}
      />
    </SectionWithSensor>
  );
};

Works.propTypes = {
  id: PropTypes.string,
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
  goToMicrosoft: PropTypes.func,
};

export default Works;
