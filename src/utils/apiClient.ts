import axios from 'axios';

const makingUrl = (url: string) => {
  return process.env.REACT_APP_BASE_URL + url;
};

const apiClient = (options: { url: string; method: string }) => {
  const url = makingUrl(options.url);

  return axios({
    ...options,
    url: url,
  });
};

export default apiClient;
