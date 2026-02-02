import { logout } from "../services/authService";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarTitle">Projeto Carros</div>

      <button
        className="btn btnGhost"
        onClick={() => logout("Logout realizado com sucesso.")}
      >
        Logout
      </button>
    </div>
  );
}
