import React, {useEffect} from 'react';
import './Lightbox.css'

const Lightbox = ({src, onClick}) => {
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClick]);

  return (<div className="lightbox">
    <div className="lightbox-layer"/>
    <div className="close"><i className="fa fa-times-circle" aria-hidden="true" onClick={onClick} title="close"></i></div>
    <img src={src} alt="lightbox"/>
  </div>)
}

export default Lightbox;
