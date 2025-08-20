import { apiClient } from "./apiClient"; // 👈 Now using named import

// Test backend connection (no real auth)
export const checkBackendConnection = async () => {
  const response = await apiClient.get("/health");
  return response.data; // { status: "OK" }
};

// Mock login (replace with real implementation later)
export const loginUser = async (credentials) => {
  try {
    // console.log("Sending login request with:", credentials);

    // FIXED: Correct API path - remove '/v1' since apiClient already has '/api' and endpoint should be '/api/v1/auth/authenticate'
    const response = await apiClient.post("/v1/auth/authenticate", credentials);

    // console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Mock signup (replace later)
export const registerUser = async (userData) => {
  const response = await apiClient.post("/v1/auth/register", userData);
  return response.data; // { message: "Signup successful (mock)" }
};
