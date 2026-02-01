import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import { getCars, deleteCarById } from "../services/mockCars";

export default function CarsListPage() {
  const navigate = useNavigate();

  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const [cars, setCars] = useState(getCars());

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return cars;
    return cars.filter(
      (c) =>
        c.modelo.toLowerCase().includes(s) ||
        c.fabricante.toLowerCase().includes(s)
    );
  }, [q, cars]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleDelete(id) {
    const ok = confirm("Confirma excluir este carro?");
    if (!ok) return;

    deleteCarById(id);
    setCars(getCars());
    setMsg("Carro excluído com sucesso!");
  }

  return (
    <div className="container">
      <Topbar onLogout={logout} />

      <div className="card">
        <div className="toolbar">
          <button
            className="btn btnPrimary"
            onClick={() => navigate("/carros/novo")}
          >
            + Novo Carro
          </button>

          <input
            className="input"
            placeholder="Buscar..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <button className="btn" onClick={() => setMsg("Lista atualizada!")}>
            Atualizar
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fabricante</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>País</th>
              <th>HP</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.fabricante}</td>
                <td>{c.modelo}</td>
                <td>{c.ano}</td>
                <td>{c.cor}</td>
                <td>{c.pais}</td>
                <td>{c.cavalosDePotencia}</td>
                <td>
                  <div className="actions">
                    <button
                      className="btn"
                      onClick={() => navigate(`/carros/${c.id}/editar`)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btnDanger"
                      onClick={() => handleDelete(c.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {msg && <div className="msgSuccess">{msg}</div>}
      </div>
    </div>
  );
}
