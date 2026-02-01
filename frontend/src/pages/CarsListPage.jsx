import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import { logout } from "../services/authService";
import { deleteCar, listCars } from "../services/carsService";

export default function CarsListPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function reload() {
    setError("");
    setLoading(true);
    try {
      const data = await listCars();
      setCars(data);
      //setCars(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Erro ao carregar carros.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    reload();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return cars;
    return cars.filter((c) => {
      const modelo = String(c.modelo ?? "").toLowerCase();
      const fabricante = String(c.fabricante ?? "").toLowerCase();
      return modelo.includes(s) || fabricante.includes(s);
    });
  }, [q, cars]);

  async function handleDelete(id) {
    const ok = confirm("Confirma excluir este carro?");
    if (!ok) return;

    try {
      await deleteCar(id);
      setMsg("Carro excluído com sucesso!");
      reload();
    } catch (err) {
      setError("Erro ao excluir carro.");
    }
  }

  return (
    <div className="container">
      <Topbar onLogout={logout} />

      <div className="card">
        <div className="toolbar">
          <button className="btn btnPrimary" onClick={() => navigate("/carros/novo")}>
            + Novo Carro
          </button>

          <input
            className="input"
            placeholder="Buscar..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <button className="btn" onClick={reload}>
            Atualizar
          </button>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="tableScroll">
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
                      <button className="btn" onClick={() => navigate(`/carros/${c.id}/editar`)}>
                        Editar
                      </button>
                      <button className="btn btnDanger" onClick={() => handleDelete(c.id)}>
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}

        {msg && <div className="msgSuccess">{msg}</div>}
        {error && <div className="msgError">{error}</div>}
      </div>
    </div>
  );
}
