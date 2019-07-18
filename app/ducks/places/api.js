import axios from 'axios';
import axiosConfig from '../../utils/axiosConfig';

import URI from '../../constants/uri';

const api = {
  getPlaces({ lat, lng, radius, query }) {
    const url = URI.GOOGLE_MAP.NEAR_BY_SEARCH({
      lat, lng, radius, query,
    });
    const config = axiosConfig({ url, method: 'GET' });
    return axios(config);
  },
};
export default api;
