import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Lightbox from '../Lightbox/Lightbox'
import './Article.css';

const withLightbox = v => v === 'sketchnote'

const ImageComponent = ({src,alt}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = val => setIsOpen(val);
  return (<>
    {isOpen && <Lightbox onClick={() => handleClick(false)} src={src}/>}
    <img alt={alt} src={src} onClick={() => withLightbox(alt) ? handleClick(true) : ''} />
    </>
  );
};

const Article = ({data}) => {

  const renderers = {
    link: ({href, children}) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
    image: ImageComponent
  };

  return (
    <div className="article">
      <ReactMarkdown children={data} renderers={renderers}/>
    </div>
  )
}

export default Article;
