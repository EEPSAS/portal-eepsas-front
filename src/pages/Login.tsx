import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-sm w-100" style={{ maxWidth: 420 }}>
        <div className="card-body p-4">
          <h2 className="h4 mb-3">Área do Aluno</h2>
          <p className="text-muted mb-4">Insira as suas credenciais para aceder ao painel.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">RA ou Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu RA ou Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Palavra-passe</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
