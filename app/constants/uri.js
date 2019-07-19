import MAP_INFO from "./mapInfo";
const URI = {
  GOOGLE_MAP: {
    TEXT_SEARCH: ({ query }) =>
      `${MAP_INFO.api}/place/textsearch/json?query=${query}&key=AIzaSyBj0VDQX82xfyCxbjXjgulP8CbhEEEo0ck`,
  },
};
export default URI;
