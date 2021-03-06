import { sortBy } from 'lodash';
const utils = {
  normalizeSearchHistory(searchHistory, payload) {
    const filteredSearchHistory = searchHistory.filter(
      item => item.title.toUpperCase() !== payload.title.toUpperCase(),
    );
    filteredSearchHistory.unshift(payload);
    if (filteredSearchHistory.length > 10) {
      filteredSearchHistory.pop();
    }
    return sortBy(filteredSearchHistory, 'title');
  },
};
export default utils;
