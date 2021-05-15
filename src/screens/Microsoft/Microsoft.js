import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import './Microsoft.css';
import msLogo from './logo-ms.png';
import {
  Lightbox, MediaItem, ImageWithLoader, LoaderInline, LoaderCircle,
} from '../../components';
import FlickrAPI from '../../service/FlickrAPI';
import {
  SIZES, MS_PHOTOSET_ID,
} from '../../service/constants';
import { formatContent } from '../../service/utils';

const { original: def, large1024: big } = SIZES;

const transformResult = (r) => ({
  src: r[`url${def}`],
  bigSrc: r[`url${big}`],
  tag: r.tags,
  id: r.id,
});

const Microsoft = ({ data }) => {
  const [photos, setPhotos] = useState([]);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await FlickrAPI.getPhotos(MS_PHOTOSET_ID, [
        `url${def}`,
        `url${big}`,
        'tags',
      ]);
      setPhotos(result.map(transformResult));
      setIsLoading(false);
    }
    // Execute the created function directly
    loadPhotos();
  }, []);

  const renderImg = (findingTag, alt, cls) => {
    const imgObject = photos.find(({ tag }) => tag === findingTag);
    return imgObject ? <ImageWithLoader image={imgObject.src} alt={alt} cls={cls} onClick={() => setLightboxImg(imgObject.bigSrc)} loader={<LoaderInline />} /> : null;
  };

  const renderMediaSection = () => (photos.length ? (
    <div className="MediaSection">
      <div className="MediaSectionItem content">
        <div className="text">
          <span>A visual representation of each technical talk:</span>
          <i className="fa fa-hand-o-down" aria-hidden="true" />
        </div>
        <div className="text">
          <span>Followed by the conference&apos;s video</span>
          <i className="fa fa-hand-o-down" aria-hidden="true" />
        </div>
      </div>
      {data.media.map(({
        title, youtubeId, tag, alt,
      }) => (
        <div className="MediaSectionItem media" key={title}>
          {renderImg(tag, alt)}
          <MediaItem title={title} youtubeId={youtubeId} />
        </div>
      ))}
    </div>
  ) : <></>);

  const renderContent = () => (lightboxImg ? <Lightbox onClick={() => setLightboxImg(null)} src={lightboxImg} />
    : (
      <>
        <div className="Header">
          <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer">
            <img src={msLogo} alt="Microsoft logo" className="msLogo" />
          </a>
          <span>{data.title}</span>
        </div>
        <div className="Section">
          <div className="content">
            <div className="description">{formatContent(data.description, data.highlightDescription, 'highlight-marker')}</div>
            <div className="description">{formatContent(data.description2, data.highlightDescription2, 'highlight-marker')}</div>
          </div>
          <div>
            {renderImg('cover', "The book's cover", 'cover-image')}
            <a href="https://www.microsoft.com/france/MSDev/Roadshow/default.aspx" target="_blank" rel="noreferrer" className="content msDevRoadShow">
              What is MS Dev Road Show?
            </a>
          </div>
          {renderMediaSection()}
        </div>
      </>
    ));

  return (
    <div className="Microsoft">
      {isLoading ? <div className="fallback-style"><LoaderCircle /></div>
        : renderContent()}

    </div>
  );
};

Microsoft.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    highlightDescription: PropTypes.string,
    description2: PropTypes.string,
    highlightDescription2: PropTypes.string,
    media: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        youtubeId: PropTypes.string,
        alt: PropTypes.string,
        tag: PropTypes.string,
      }),

    ),
  }),
};

export default Microsoft;
