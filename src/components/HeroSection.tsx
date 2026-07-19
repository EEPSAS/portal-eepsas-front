const HeroSection = () => {
  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <span className="badge bg-primary mb-3">Portal Público</span>
            <h1 className="display-5 fw-bold">Bem-vindo à comunidade escolar Sebastiana</h1>
            <p className="lead text-muted">
              Conheça os projetos, notícias e recursos pensados para apoiar o percurso dos alunos.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-primary btn-lg" href="#noticias">
                Ver Notícias
              </a>
              <a className="btn btn-outline-secondary btn-lg" href="#projetos">
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="mb-3">Foco em inovação</h5>
                  <p className="text-muted mb-0">
                    O Portal Sebastiana reúne notícias, projetos educacionais e ferramentas digitais para todos os alunos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
