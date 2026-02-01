import { api } from "./api";

export async function listCars() {
  const response = await api.get("/api/carros");
  return response.data;
}
