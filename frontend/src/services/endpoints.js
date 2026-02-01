// Centralize aqui as rotas da API (contrato do Passo 2)
// Preencha conforme suas collections do Postman/Insomnia

export const ENDPOINTS = {
  // auth
  LOGIN: "/api/usuarios/login",

  // carros
  CARS: "/api/carros",
  CAR_BY_ID: (id) => `/api/carros/${id}`, 
  
};
