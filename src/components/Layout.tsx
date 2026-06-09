import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-icon">▶</span>
          Cine<span>App</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
