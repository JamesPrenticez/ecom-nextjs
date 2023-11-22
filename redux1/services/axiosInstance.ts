import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockUsers } from '../../mocks';

const development = true; // !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const useMockData = false;

export const axiosInstance = axios.create({
  baseURL: development ? 'http://localhost:3000/api/' : 'production endpoint here',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

if (useMockData) {
  const mockAxiosInstance = new MockAdapter(axiosInstance, { delayResponse: 1000 }); // set to 2000
  //============================================
  // GET
  //============================================
  mockAxiosInstance.onGet('/user').reply((config) => {
    const { params } = config;
    console.log("mock GET request made!")

    if (params.id) return [200, mockUsers[0]] // Get user by id

    return [204, { message: "User ID not provided" }];
  });

  //============================================
  // POST
  //============================================
  mockAxiosInstance.onPost('/user').reply((config) => {
    console.log("mock POST request made!")
    return [200, { message: "success" }];
  })

  //============================================
  // PUT
  //============================================
  mockAxiosInstance.onPut('/user').reply((config) => {
    console.log("mock PUT request made!")
    return [200, { message: "success" }];
  })
}
