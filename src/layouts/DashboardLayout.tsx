import { NavLink, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="dashboard d-flex min-vh-100 bg-light">
      <aside className="sidebar bg-white border-end shadow-sm p-3" style={{ width: 260 }}>
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
            <div>
              <h5 className="fw-bold mb-1">Portal EEPSAS</h5>
              <p className="text-muted small mb-0">Ambiente de Aprendizagem</p>
            </div>
            <NavLink to="/" className="btn btn-sm btn-outline-primary">
              Portal Público
            </NavLink>
          </div>
        </div>
        <nav className="nav flex-column gap-2">
          {[
            { label: 'Início', to: '/dashboard' },
            { label: 'As Minhas Disciplinas', to: '/dashboard/disciplinas' },
            { label: 'Biblioteca (Lib-EEPSAS)', to: '/dashboard/biblioteca' },
            { label: 'Rádio Escolar', to: '/dashboard/radio' },
            { label: 'Notas e Faltas', to: '/dashboard/notas' },
            { label: 'Definições', to: '/dashboard/configuracoes' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link rounded text-dark ${isActive ? 'active bg-light' : 'text-secondary'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-grow-1">
        <header className="topbar bg-white border-bottom py-3 px-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <small className="text-muted">Olá, Aluno</small>
            <h1 className="h5 mb-0">Bem-vindo ao seu painel</h1>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">🔍</span>
              <input type="search" className="form-control border-start-0" placeholder="Pesquisar" />
            </div>
            <button type="button" className="btn btn-outline-secondary rounded-circle p-2">
              <span className="visually-hidden">Notificações</span>🔔
            </button>
          </div>
        </header>

        <section className="content p-4">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default DashboardLayout
