import axios, { AxiosRequestConfig } from "axios";
// import { defaultTo, get } from "lodash";
import { URL } from "../constants";
import { store } from "../store";
import { actionLogout } from "../store/ authSlice";

export const instanceAxios = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

instanceAxios.defaults.headers.common["Content-Type"] = "application/json";

instanceAxios.interceptors.response.use(
  (response) => {
    if (response.data.code && +response.data.code !== 200) {
      // const message = defaultTo(get(response, "data.message"), ERROR_MESSAGE);
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (!axios.isCancel(error)) {
      // const message = defaultTo(get(error, "message"), ERROR_MESSAGE);
    }

    const { url } = error.config;
    const isUrlLogin = url === URL.Login;
    if (error.response.status === 401 && !isUrlLogin) {
      store.dispatch(actionLogout());
    }
    return Promise.reject(error);
  }
);

export default function request(options: AxiosRequestConfig) {
  return instanceAxios(options);
}
