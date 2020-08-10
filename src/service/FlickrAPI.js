import { FLICKR } from "./constants.js";

const getUrl = (photoSetId, sizes) =>
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR.api_key}&photoset_id=${photoSetId}&extras=${sizes}&format=json&nojsoncallback=true`;

const photosetsUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR.api_key}&user_id=${FLICKR.user_id}&format=json&nojsoncallback=true`;

async function getPhotosets() {
  const response = await fetch(photosetsUrl);
  return response && response.ok
    ? (await response.json()).photosets.photoset.map((p) => p.id)
    : { Error: `Error while fetching user's photosets` };
}

async function getPhotos(photoSetId, sizes) {
  const sizesParam = sizes.join(",");
  const response = await fetch(getUrl(photoSetId, sizesParam));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

export default {
  getPhotos,
  getPhotosets,
};
