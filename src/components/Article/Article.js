import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Lightbox, ImageWithLoader, LoaderInline } from '../'
import './Article.css';

const withLightbox = v => v === 'sketchnote'
const isNodejs = v => v === 'nodejs'

const ImageComponent = ({src,alt}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = val => setIsOpen(val);
  return (<>
    {isOpen && <Lightbox onClick={() => handleClick(false)} src={src}/>}
    <ImageWithLoader cls={isNodejs(alt) ? 'nodejs' : ''} alt={alt} image={src} onClick={() => withLightbox(alt) ? handleClick(true) : ''} loader={<LoaderInline height="50" width="50" />}/>
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
