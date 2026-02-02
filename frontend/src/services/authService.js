import api from "./api";
import { ENDPOINTS } from "./endpoints";

export async function login(email, password) {
  const payload = { email, password };

  const { data } = await api.post(ENDPOINTS.LOGIN, payload);

  // IMPORTANTÍSSIMO: ajuste o campo do token conforme sua API
  // Ex.: data.token ou data.accessToken
  const token = data.token || data.accessToken;

  if (!token) {
    throw new Error("Token não encontrado na resposta do login.");
  }

  localStorage.setItem("token", token);
  return token;
}

export function logout(message) {
  localStorage.removeItem("token");

  // opcional: exibir mensagem no login (aproveita o padrão do 5.1)
  if (message) {
    localStorage.setItem("auth_message", message);
  }

  window.location.href = "/login";
}

