const utils = {
  normalizeSearchHistory(searchHistory, payload) {
    searchHistory.unshift(payload);
    if (searchHistory.length > 10) {
      searchHistory.pop();
    }
    return [...new Set(searchHistory)];
  },
};
export default utils;
