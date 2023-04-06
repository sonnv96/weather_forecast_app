import axios, { AxiosResponse } from 'axios';
import { Status } from '../models';

const baseURL = 'https://geocoding-api.open-meteo.com/v1';

const axiosClient = axios.create({
  // baseURL: 'http://192.168.1.90:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
});


// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      if (error.response.status === Status.RESPONSE_STATUS_401) {
      } else if (
        error.response.status === Status.RESPONSE_STATUS_400 ||
        error.response.status === Status.RESPONSE_STATUS_402 ||
        error.response.status === Status.RESPONSE_STATUS_403 ||
        error.response.status === Status.RESPONSE_STATUS_404 ||
        error.response.status === Status.RESPONSE_STATUS_500
      ) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.message
        ) {
          return error.response.data.error.message;
        } else {
          return 'ERROR';
        }
      }
    }
  }
);

export default axiosClient;
