import React from 'react';
import MediaSection from './MediaSection'

const Conferences = ({data, media, className, key}) =>
 (<div className={`conferences ${className}`} key={key}>
     {data}
     <MediaSection media={media}></MediaSection>
 </div>)


export default Conferences;
