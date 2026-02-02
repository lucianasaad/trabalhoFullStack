
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
});

// Request: envia token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response: se der 401/403, remove token e manda pro login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      logout();

      // mensagem para aparecer no login
      localStorage.setItem(
        "auth_message",
        "Sessão expirada ou acesso não autorizado. Faça login novamente."
      );

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
