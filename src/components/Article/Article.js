import React from 'react';
import './Article.css';

const Article = ({data}) => {

  const renderTitle = titleItem => (
    <div className={`title ${titleItem.size || ''}`}>{titleItem.text}</div>
  )

  const renderParagraph = paragraphItem => (
    <div className="paragraph">{paragraphItem.text}</div>
  )

  const renderImage = imageItem => (
    <img src={imageItem.src} alt={imageItem.alt} className={imageItem.className || ''}/>
  )

  const renderBlocItem = item => {
    switch(item.type) {
      case 'title':
        return renderTitle(item);
      case 'paragraph':
        return renderParagraph(item);
      case 'image':
        return renderImage(item);
      default :
        return item;
    }
  }

  return (
    <div className="article">
      {data.map(bloc => (
        <div className="bloc">
          {bloc.map(renderBlocItem)}
        </div>
      ))}

    </div>
  )
}

export default Article;
