import axios, { AxiosRequestConfig } from 'axios';

export const baseURL = 'https://pokeapi.co/api/v2';

const createAxiosInstance = () => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json', 
    },
  });
};

export const getWithHeaders = async <T>(url: string, headers?: AxiosRequestConfig['headers']): Promise<T> => {
  const instance = createAxiosInstance();

  try {
    const response = await instance.get<T>(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
};
