import axios from "axios";
import CustomCookies from "./Cookies";

const instance = axios.create({
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  let accessToken = CustomCookies.getAccessToken();
  if (!config?.headers?.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      CustomCookies.clearTokens();
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

const protocol = "https://";
// const backendServiceName = "crmbackend";
const domainName = "elogin.co.in";
// let hostName = protocol + backendServiceName + "." + domainName;
const fullUrl = window.location.host;
const urlParts = fullUrl.split(".");
let subDomain = urlParts[0];
//TODO temp domainname issue
// hostName = "http://20.244.27.210:89";
// hostName = "http://98.70.34.83:89";
// subDomain = "godwincables";

export const coreService = {
  prod: {
    API_URL: "https://backend-ecom.riverworld.io/ecom/api/"+ fullUrl,
  },
  local: {
    API_URL: "https:/backend-ecom.riverworld.io/ecom/api/demo-books.riverworld.io",
    // API_URL: "http://localhost:8080/ecom/api/demo-timesheet.riverworld.io",
  },
};

const redirectToLogin = () => {
  window.location.href = protocol + subDomain + "." + domainName;
};

const getEnvironment = (key) => {
  if (process.env.NODE_ENV === "development") {
    return key["local"];
  }
  if (process.env.NODE_ENV === "production") {
    return key["prod"];
  }
  return key["local"];
};

export const coreServiceConfig = getEnvironment(coreService);

const BASE_URL = {
  CORE_SERVICE: coreServiceConfig.API_URL,
};

export const getApi = (
  path,
  serviceType,
  params = {},
  headers = { Accept: "application/json", "Content-Type": "application/json" }
) => {
  const url = serviceType ? BASE_URL[serviceType] : BASE_URL.CORE_SERVICE;
  return instance.get(url + path, { params, headers });
};

export const deleteApi = (path, serviceType) => {
  const url = serviceType ? BASE_URL[serviceType] : BASE_URL.CORE_SERVICE;
  return instance.delete(url + path);
};

export const postApi = (path, body, headers = {}, params = {}, serviceType) => {
  const url = serviceType ? BASE_URL[serviceType] : BASE_URL.CORE_SERVICE;
  return instance.post(url + path, body, { params, headers });
};

export const putApi = (path, body, headers = {}, params = {}, serviceType) => {
  const url = serviceType ? BASE_URL[serviceType] : BASE_URL.CORE_SERVICE;
  return instance.put(url + path, body, { params, headers });
};
