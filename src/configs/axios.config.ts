import axios from "axios";
import { useCookies } from "react-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL as string, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const [cookies] = useCookies(["access_token"]); // Replace 'token' with the name of your cookie

    if (cookies.access_token) {
      config.headers.Authorization = `Bearer ${cookies.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
