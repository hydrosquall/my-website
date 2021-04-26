const transformResult = (result, def, big) =>
  result.map((r) => {
    return {
      src: r[`url${def}`],
      width: r[`width${def}`],
      height: r[`height${def}`],
      bigSrc: r[`url${big}`],
      id: r.id
    };
  });

const sufflePhotos = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export { transformResult, sufflePhotos };
