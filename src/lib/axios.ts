import Axios from "axios";

import { API_URL } from "@/config";
import { AppNotification } from "@/providers/notification";

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    AppNotification.error(message);

    return Promise.reject(error);
  }
);
