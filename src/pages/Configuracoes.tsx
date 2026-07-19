const Configuracoes = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Definições</h2>
        <p className="text-muted">Ajuste as suas preferências, perfil e notificações a partir deste espaço.</p>

        <div className="row gy-3">
          <div className="col-md-6">
            <div className="card border-0 rounded-3 shadow-sm p-3 h-100">
              <h3 className="h6">Perfil</h3>
              <p className="mb-0 text-muted">Atualize informações de contacto, foto e dados de acesso.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 rounded-3 shadow-sm p-3 h-100">
              <h3 className="h6">Segurança</h3>
              <p className="mb-0 text-muted">Altere a sua palavra-passe ou configure autenticação adicional.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 rounded-3 shadow-sm p-3 h-100">
              <h3 className="h6">Notificações</h3>
              <p className="mb-0 text-muted">Gerencie e-mails e alertas para atividades e tarefas.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 rounded-3 shadow-sm p-3 h-100">
              <h3 className="h6">Preferências</h3>
              <p className="mb-0 text-muted">Configure idioma, tema e opções de visualização do painel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuracoes
