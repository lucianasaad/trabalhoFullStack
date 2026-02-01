// src/services/mockCars.js

export const mockCars = [
  {
    id: 1,
    fabricante: "Fiat",
    modelo: "Argo",
    ano: 2022,
    cor: "Prata",
    pais: "BR",
    cavalosDePotencia: 98,
  },
  {
    id: 2,
    fabricante: "VW",
    modelo: "Polo",
    ano: 2021,
    cor: "Azul",
    pais: "BR",
    cavalosDePotencia: 110,
  },
  {
    id: 3,
    fabricante: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Preto",
    pais: "JP",
    cavalosDePotencia: 150,
  },
];

// Funções auxiliares (simulam API)
export function getCars() {
  return [...mockCars];
}

export function getCarById(id) {
  return mockCars.find((c) => c.id === Number(id));
}

export function deleteCarById(id) {
  const index = mockCars.findIndex((c) => c.id === Number(id));
  if (index !== -1) {
    mockCars.splice(index, 1);
  }
}
