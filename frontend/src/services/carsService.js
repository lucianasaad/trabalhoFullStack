import api from "./api";
import { ENDPOINTS } from "./endpoints";

export async function listCars() {
  // tenta buscar mais (se o backend suportar)
  const tryUrls = [
    ENDPOINTS.CARS,
    `${ENDPOINTS.CARS}?size=200`,
    `${ENDPOINTS.CARS}?limit=200`,
    `${ENDPOINTS.CARS}?page=0&size=200`,
  ];

  for (const url of tryUrls) {
    try {
      const { data } = await api.get(url);
      if (Array.isArray(data) && data.length) return data;
    } catch (e) {
      // ignora e tenta a próxima URL
    }
  }

  // fallback: retorna vazio se nada funcionar
  const { data } = await api.get(ENDPOINTS.CARS);
  return Array.isArray(data) ? data : [];
}


export async function getCar(id) {
  const { data } = await api.get(ENDPOINTS.CAR_BY_ID(id));
  return data;
}

export async function createCar(payload) {
  const { data } = await api.post(ENDPOINTS.CARS, payload);
  return data;
}

export async function updateCar(id, payload) {
  const { data } = await api.put(ENDPOINTS.CAR_BY_ID(id), payload);
  return data;
}

export async function deleteCar(id) {
  await api.delete(ENDPOINTS.CAR_BY_ID(id));
}

