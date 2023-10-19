import axios from "axios";
import oemConfig from "../../config";
import { store } from "../../store";
import errorResponseHandler from "./errorHandler";
import successResponseHandler from "./successHandler";

export const NetworkConfig = () => {
  axios.defaults.baseURL = oemConfig.baseUrl;
  axios.defaults.timeout = 30000;
  axios.defaults.headers.get["Accept"] = "application/json";
  axios.defaults.headers.post["Accept"] = "application/json";
  axios.defaults.headers["currentVersion"] = oemConfig.version;
  axios.defaults.headers["platform"] = oemConfig.platform;

  axios.interceptors.request.use(async (config) => {
    const accessToken = store.getState().oemAuth.accessToken;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  });
  axios.interceptors.response.use(successResponseHandler, errorResponseHandler);
};
