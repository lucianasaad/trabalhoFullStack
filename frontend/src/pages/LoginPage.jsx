import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("usuario@email.com");
  const [password, setPassword] = useState("********");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // UI primeiro: por enquanto simula login.
    // No próximo passo, aqui vira chamada real da API e salva token de verdade.
    if (!email.trim() || !password.trim()) {
      setError("Preencha email e senha.");
      return;
    }

    // token fake só para liberar navegação e montar telas
    localStorage.setItem("token", "TOKEN_FAKE_PARA_UI");
    navigate("/carros");
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

          {error && <div className="msgError">{error}</div>}
        </form>
      </div>
    </div>
  );
}
