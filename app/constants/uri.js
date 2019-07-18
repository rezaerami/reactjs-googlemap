import MAP_INFO from "./mapInfo";


const URI = {
  GOOGLE_MAP: {
    NEAR_BY_SEARCH: ({ lat, lng, radius, query }) =>
      `${MAP_INFO.api}/place/nearbysearch/json?location=-${lat},${lng}&radius=${radius}&name=${query}&key=${MAP_INFO.key}`,
  },
};
export default URI;
