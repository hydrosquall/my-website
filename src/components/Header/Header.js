import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Header.css';
import profileImage from './profile.jpg';
import {
  jsonData,
} from '../../service';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';
import LoaderInline from '../Loader/LoaderInline';

const Header = ({
  id,
}) => {
  const [t] = useTranslation();
  const { header, skills } = jsonData;
  const getSocial = () => {
    const socialContent = header.social.map(({ id: socialId, url, className }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={t(`header.social.${socialId}`)}
        title={t(`header.social.${socialId}`) || null}
      >
        <i className={`fa ${className}`} />
      </a>
    ));

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={`mailto:${header.mail}?`} target="_top">
              {` ${header.mail}`}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={header.url}>
              <i className="fa fa-file-text-o" title={t('header.resumeTitle') || null} />
            </a>
          </div>
        </div>
      </>
    );
  };

  const getImage = () => (<ImageWithLoader cls="pic" image={profileImage} alt="profile" loader={<LoaderInline height="50" width="50" />} />);

  return (
    <div className="Header" id={id}>
      <div className="name">
        <h2>{header.name}</h2>
        <div className="presentation">
          {skills.map((skill) => (
            <div key={skill}>{t(`header.skill.${skill}`)}</div>
          ))}
        </div>
      </div>
      <div className="infos">
        {getImage()}
        {getSocial()}
      </div>
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
