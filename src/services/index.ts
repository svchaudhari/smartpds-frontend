import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Function to create an Axios instance with a dynamic base URL.
 * @param baseURL - The base URL for API requests
 * @returns AxiosInstance
 */
const createAPI = (baseURL: string): AxiosInstance => {
  const api = axios.create({
    baseURL,
    timeout: 10000, // Timeout after 10 seconds
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request Interceptor
  api.interceptors.request.use(
    (config: any) => {
      // Example: Add Authorization token if available
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: any) => {
      // Handle API errors globally
      console.error('API Error:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  return api;
};

export default createAPI;
