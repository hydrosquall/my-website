import React from 'react';
import * as PropTypes from 'prop-types';
import './Header.css';
import profileImage from './profile.jpg';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';
import LoaderInline from '../Loader/LoaderInline';

const Header = ({
  id,
  resume,
  name,
  presentationSkills,
  mail,
  social = [],
}) => {
  const getSocial = () => {
    const socialContent = social.map(({ url, title, className }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={title}
        title={title || null}
      >
        <i className={`fa ${className}`} />
      </a>
    ));

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={`mailto:${mail}?`} target="_top">
              {` ${mail}`}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={resume.url}>
              <i className="fa fa-file-text-o" title={resume.title || null} />
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
        <h2>{name}</h2>
        <div className="presentation">
          {presentationSkills.map((skill) => (
            <div key={skill}>{skill}</div>
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
  name: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  mail: PropTypes.string.isRequired,
  resume: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  presentationSkills: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default Header;
