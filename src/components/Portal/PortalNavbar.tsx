import { NavLink } from 'react-router-dom'

const PortalNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          Portal Sebastiana
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portalNavbar"
          aria-controls="portalNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portalNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Início
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Área do Aluno
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink className="btn btn-primary" to="/login">
              Área do Aluno
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PortalNavbar
