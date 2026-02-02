import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const msg = localStorage.getItem("auth_message");
    if (msg) {
      setInfo(msg);
      localStorage.removeItem("auth_message");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setInfo("");

    try {
      await login(email, password);
      navigate("/carros");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Falha ao realizar login.";
      setError(msg);
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 480, margin: "0 auto" }}>
        <h1 className="title">Projeto Carros</h1>

        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label className="label">Email:</label>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </div>

          <div className="formRow">
            <label className="label">Senha:</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <button className="btn btnPrimary" style={{ width: "100%" }}>
            Entrar
          </button>

          {info && <div className="msgSuccess">{info}</div>}
          {error && <div className="msgError">{error}</div>}
        </form>
      </div>
    </div>
  );
}
