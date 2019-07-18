import axios from 'axios';
import axiosConfig from '../../utils/axiosConfig';

import URI from '../../constants/uri';

const api = {
  getPlaces({ query }) {
    const url = URI.GOOGLE_MAP.TEXT_SEARCH({
      query,
    });
    const config = axiosConfig({ url, method: 'GET' });
    return axios(config);
  },
};
export default api;
