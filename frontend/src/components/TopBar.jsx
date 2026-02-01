export default function Topbar({ onLogout }) {
  return (
    <div className="topbar">
      <div className="topbarTitle">Projeto Carros</div>
      <button className="btn btnGhost" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
