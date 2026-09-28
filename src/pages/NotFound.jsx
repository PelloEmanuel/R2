import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// Página mostrada cuando la ruta no coincide con ninguna definida
function NotFound() {
  return (
    <Container className="text-center py-5" style={{ maxWidth: '500px' }}>
      <h1 style={{ fontSize: '4rem' }} className="mb-2">
        404
      </h1>
      <p className="mb-4" style={{ color: 'var(--tinta-suave)' }}>
        La página que buscás no existe.
      </p>
      <Link to="/" className="btn btn-pino">
        Volver a inicio
      </Link>
    </Container>
  )
}

export default NotFound
