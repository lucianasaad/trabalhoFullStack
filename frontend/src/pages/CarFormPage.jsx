import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCar, getCar, updateCar } from "../services/carsService";

export default function CarFormPage({ mode }) {
  const navigate = useNavigate();
  const params = useParams();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(mode === "edit");

  const [form, setForm] = useState({
    fabricante: "",
    modelo: "",
    ano: "",
    cor: "",
    pais: "",
    cavalosDePotencia: "",
  });

  useEffect(() => {
    async function load() {
      if (mode !== "edit") return;
      setLoading(true);
      setError("");

      try {
        const car = await getCar(params.id);
        setForm({
          fabricante: car.fabricante ?? "",
          modelo: car.modelo ?? "",
          ano: car.ano ?? "",
          cor: car.cor ?? "",
          pais: car.pais ?? "",
          cavalosDePotencia: car.cavalosDePotencia ?? "",
        });
      } catch (err) {
        setError("Erro ao carregar carro para edição.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [mode, params.id]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.fabricante?.trim() || !form.modelo?.trim() || !String(form.ano).trim()) {
      return "Preencha Fabricante, Modelo e Ano.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setError("");
    try {
      // payload: mantém os nomes como estão no backend (ajuste se sua API usar nomes diferentes)
      const payload = {
        fabricante: form.fabricante,
        modelo: form.modelo,
        ano: Number(form.ano),
        cor: form.cor,
        pais: form.pais,
        cavalosDePotencia: Number(form.cavalosDePotencia || 0),
      };

      if (mode === "edit") {
        await updateCar(params.id, payload);
      } else {
        await createCar(payload);
      }

      navigate("/carros");
    } catch (err) {
      setError("Erro ao salvar carro.");
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Carro - {mode === "edit" ? "Editar" : "Criar"}</h1>

        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label className="label">Fabricante:</label>
            <input className="input" value={form.fabricante} onChange={(e) => setField("fabricante", e.target.value)} />
          </div>

          <div className="formRow">
            <label className="label">Modelo:</label>
            <input className="input" value={form.modelo} onChange={(e) => setField("modelo", e.target.value)} />
          </div>

          <div className="formRow">
            <label className="label">Ano:</label>
            <input className="input" value={form.ano} onChange={(e) => setField("ano", e.target.value)} />
          </div>

          <div className="formRow">
            <label className="label">Cor:</label>
            <input className="input" value={form.cor} onChange={(e) => setField("cor", e.target.value)} />
          </div>

          <div className="formRow">
            <label className="label">País:</label>
            <input className="input" value={form.pais} onChange={(e) => setField("pais", e.target.value)} />
          </div>

          <div className="formRow">
            <label className="label">HP:</label>
            <input
              className="input"
              value={form.cavalosDePotencia}
              onChange={(e) => setField("cavalosDePotencia", e.target.value)}
            />
          </div>

          <div className="actions">
            <button className="btn btnPrimary" type="submit">Salvar</button>
            <button className="btn" type="button" onClick={() => navigate("/carros")}>Cancelar</button>
          </div>

          {error && <div className="msgError">{error}</div>}
        </form>
      </div>
    </div>
  );
}
