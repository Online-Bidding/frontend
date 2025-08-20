import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for auth token
apiClient.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      const customError = new Error(data?.message || "An error occured");
      customError.status = status;
      customError.data = data;

      if (status === 401) {
        console.error("Unauthorized access - Possibly expired token");
        // Optional: Redirect to login page or refresh token
        // window.location.href = '/login';
      }

      return Promise.reject(customError);
    } else if (error.request) {
      // Network error
      const networkError = new Error(
        "Network error - please check your connection"
      );
      networkError.status = 0;
      return Promise.reject(networkError);
    } else {
      // Something else happened
      return Promise.reject(error);
    }
  }
);
