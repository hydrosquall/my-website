import React from 'react';

/* eslint-disable no-param-reassign */
const transformResult = (result, def, big) => result.map((r) => ({
  src: r[`url${def}`],
  width: r[`width${def}`],
  height: r[`height${def}`],
  bigSrc: r[`url${big}`],
  id: r.id,
}));

const sufflePhotos = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const formatContent = (content, highlight, cls) => {
  const [phrase1, phrase2] = content.split(highlight);
  return [phrase1, highlight, phrase2].map((text, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index} className={index === 1 ? cls : ''}>
      {text}
    </span>
  ));
};

export { transformResult, sufflePhotos, formatContent };
