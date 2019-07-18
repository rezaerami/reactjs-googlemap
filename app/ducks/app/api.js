import axios from 'axios';
import axiosConfig from '../../utils/axiosConfig';

import URI from '../../constants/uri';

const api = {
  sample({ sample }) {
    const url = URI.SAMPLE.FOO({
      sample,
    });
    const config = axiosConfig({ url, method: 'GET' });
    return axios(config);
  },
};
export default api;
