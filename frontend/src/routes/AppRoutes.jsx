import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CarsListPage from "../pages/CarsListPage";
import CarFormPage from "../pages/CarFormPage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/carros" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/carros"
          element={
            <ProtectedRoute>
              <CarsListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/carros/novo"
          element={
            <ProtectedRoute>
              <CarFormPage mode="create" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/carros/:id/editar"
          element={
            <ProtectedRoute>
              <CarFormPage mode="edit" />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/carros" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
