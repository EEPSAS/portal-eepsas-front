const projects = [
  {
    title: 'Lib-EEPSAS',
    description: 'O sistema da biblioteca escolar com recursos de pesquisa e reservas inteligentes.',
    variant: 'primary',
  },
  {
    title: 'RadioAtividade',
    description: 'A rádio escolar com podcasts, roteiros e conteúdos produzidos pelos alunos.',
    variant: 'success',
  },
  {
    title: 'Wiki-EEPSAS',
    description: 'Uma base de conhecimento técnico para partilhar truques, guias e boas práticas.',
    variant: 'warning',
  },
]

const EcosystemHighlights = () => {
  return (
    <section id="projetos" className="py-5 bg-white">
      <div className="container">
        <div className="mb-4">
          <h2 className="h4">Ecossistema de Projetos</h2>
          <p className="text-muted">Conheça os projetos internos que estimulam a criatividade e o trabalho em equipa.</p>
        </div>

        <div className="row gy-4">
          {projects.map((project) => (
            <div key={project.title} className="col-md-4">
              <div className={`card h-100 border-${project.variant} shadow-sm`}>
                <div className="card-body">
                  <h5 className={`text-${project.variant}`}>{project.title}</h5>
                  <p className="text-muted mb-0">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcosystemHighlights
