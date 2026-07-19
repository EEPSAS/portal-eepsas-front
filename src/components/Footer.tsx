const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Portal Sebastiana</h5>
            <p className="mb-0 text-muted">
              Uma plataforma pensada para aproximar a comunidade escolar das novidades e dos recursos de aprendizagem.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small>© {new Date().getFullYear()} EEPSAS. Todos os direitos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
