const selectors = {
  places: state => state.get('places'),
  searchHistory: state => state.get('places').searchHistory,
};
export default selectors;
