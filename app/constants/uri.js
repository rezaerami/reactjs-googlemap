import MAP_INFO from "./mapInfo";
const URI = {
  GOOGLE_MAP: {
    TEXT_SEARCH: ({ query }) =>
      `${MAP_INFO.api}/place/textsearch/json?query=${query}&key=${MAP_INFO.key}`,
  },
};
export default URI;
