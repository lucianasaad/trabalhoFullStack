import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../services/mockCars";


export default function CarFormPage({ mode }) {
  const navigate = useNavigate();
  const params = useParams();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fabricante: "",
    modelo: "",
    ano: "",
    cor: "",
    pais: "",
    cavalosDePotencia: "",
  });

 useEffect(() => {
   if (mode !== "edit") return;

   const car = getCarById(params.id);

   if (!car) {
     setError(`Carro não encontrado (id=${params.id})`);
     return;
   }

   setForm(car);
 }, [mode, params.id]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.fabricante || !form.modelo || !form.ano) {
      return "Por favor, preencha Fabricante, Modelo e Ano.";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError("");
    // Aqui no próximo passo vira POST/PUT real.
    navigate("/carros");
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Carro - {mode === "edit" ? "Editar" : "Criar"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label className="label">Fabricante:</label>
            <input
              className="input"
              value={form.fabricante}
              onChange={(e) => setField("fabricante", e.target.value)}
              placeholder="Ex.: Fiat"
            />
          </div>

          <div className="formRow">
            <label className="label">Modelo:</label>
            <input
              className="input"
              value={form.modelo}
              onChange={(e) => setField("modelo", e.target.value)}
              placeholder="Ex.: Argo"
            />
          </div>

          <div className="formRow">
            <label className="label">Ano:</label>
            <input
              className="input"
              value={form.ano}
              onChange={(e) => setField("ano", e.target.value)}
              placeholder="Ex.: 2022"
            />
          </div>

          <div className="formRow">
            <label className="label">Cor:</label>
            <input
              className="input"
              value={form.cor}
              onChange={(e) => setField("cor", e.target.value)}
              placeholder="Ex.: Prata"
            />
          </div>

          <div className="formRow">
            <label className="label">País:</label>
            <input
              className="input"
              value={form.pais}
              onChange={(e) => setField("pais", e.target.value)}
              placeholder="Ex.: BR"
            />
          </div>

          <div className="formRow">
            <label className="label">HP:</label>
            <input
              className="input"
              value={form.cavalosDePotencia}
              onChange={(e) => setField("cavalosDePotencia", e.target.value)}
              placeholder="Ex.: 98"
            />
          </div>

          <div className="actions">
            <button className="btn btnPrimary" type="submit">
              Salvar
            </button>
            <button className="btn" type="button" onClick={() => navigate("/carros")}>
              Cancelar
            </button>
          </div>

          {error && <div className="msgError">{error}</div>}
        </form>
      </div>
    </div>
  );
}
