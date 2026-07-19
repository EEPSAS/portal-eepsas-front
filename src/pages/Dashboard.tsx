import { useMemo } from 'react'

const Dashboard = () => {
  const stats = useMemo(
    () => [
      { label: 'Tarefas Pendentes', value: 4, variant: 'primary' },
      { label: 'Frequência', value: '92%', variant: 'success' },
      { label: 'Projetos Ativos', value: 3, variant: 'warning' },
    ],
    [],
  )

  const quickAccess = useMemo(
    () => [
      'Matemática',
      'Programação',
      'Projetos Interdisciplinares',
    ],
    [],
  )

  const classNotices = useMemo(
    () => [
      'Planeamento da semana de avaliação disponível.',
      'Nova nota publicada em Ciências da Computação.',
      'Reunião de tutorias na sexta-feira às 14h.',
    ],
    [],
  )

  return (
    <div className="dashboard-page">
      <div className="row g-4 mb-4">
        {stats.map((stat) => (
          <div key={stat.label} className="col-md-4">
            <div className={`card border-start border-4 border-${stat.variant} shadow-sm h-100`}>
              <div className="card-body">
                <p className="text-muted mb-2">{stat.label}</p>
                <h3 className="mb-0">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Acesso Rápido</h5>
              <div className="list-group list-group-flush">
                {quickAccess.map((module) => (
                  <button key={module} type="button" className="list-group-item list-group-item-action">
                    {module}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Avisos da Turma</h5>
              <ul className="list-unstyled mb-0">
                {classNotices.map((notice) => (
                  <li key={notice} className="mb-3">
                    <span className="d-block text-muted">• {notice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
