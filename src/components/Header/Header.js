import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Header.css";
import profileImage from './profile.jpg';
import LoaderInline from '../Loader/LoaderInline';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ),
  mail: PropTypes.string,
  imageUrl: PropTypes.string,
  resume: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};

const defaultProps = {
  social: [],
};

const Header = ({
  id,
  resume,
  name,
  imageUrl,
  presentationSkills,
  mail,
  social,
}) => {
  const [profileLoading, setProfileLoading] = useState(true);
  const getSocial = () => {
    let socialContent = social.map((item, index) => {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          title={item.title || null}
        >
          <i className={"fa " + item.className}></i>
        </a>
      );
    });

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={"mailto:" + mail + "?"} target="_top">
              {" " + mail}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={resume.url}>
              <i className="fa fa-file-text-o" title={resume.title || null}></i>
            </a>
          </div>
        </div>
      </>
    );
  };

  const getImage = () => {
    return imageUrl ? (
      <div className="pic">
        {profileLoading && <LoaderInline height="50" width="50" />}
        <img src={profileImage} className={!profileLoading ? 'loaded' : ''} alt="profile" onLoad={() => setProfileLoading(false)}/>
      </div>
    ) : null;
  };

  return (
    <div className="Header" id={id}>
        <div className="name">
          <h2>{name}</h2>
          <div className="presentation">
            {presentationSkills.map((skill, index) => (
              <div key={index}>{skill}</div>
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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
