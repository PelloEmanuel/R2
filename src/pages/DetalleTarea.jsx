import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'

// Página de detalle: obtiene el ID desde la URL con useParams
function DetalleTarea({ tareas, eliminarTarea }) {
  const { id } = useParams()
  const navigate = useNavigate()

  // Busca la tarea según el ID recibido en la URL
  const tarea = tareas.find((t) => t.id === Number(id))

  // Si no existe, se muestra un mensaje en lugar de romper la app
  if (!tarea) {
    return (
      <Container style={{ maxWidth: '700px' }}>
        <Alert variant="danger">
          No se encontró ninguna tarea con el ID <strong>{id}</strong>.
        </Alert>
        <Link to="/" className="btn btn-contorno">
          Volver a inicio
        </Link>
      </Container>
    )
  }

  const manejarEliminar = () => {
    const confirmar = window.confirm(
      `¿Eliminar la tarea "${tarea.titulo}"? Esta acción no se puede deshacer.`,
    )
    if (confirmar) {
      eliminarTarea(tarea.id)
      navigate('/')
    }
  }

  return (
    <Container style={{ maxWidth: '700px' }}>
      <div className="tarjeta-papel aparecer">
        <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
          <h1 className="mb-0">{tarea.titulo}</h1>
          <span
            className={`etiqueta-estado ${tarea.completada ? 'completa' : 'incompleta'}`}
          >
            {tarea.completada ? 'Completa' : 'Incompleta'}
          </span>
        </div>

        <p className="mb-4">{tarea.descripcion}</p>

        <p style={{ color: 'var(--tinta-suave)' }} className="mb-4">
          Creada el: <strong>{tarea.fechaCreacion}</strong>
        </p>

        <div className="d-flex flex-wrap gap-2">
          <Link to="/" className="btn btn-contorno">
            ← Volver a inicio
          </Link>
          <Link to={`/tareas/${tarea.id}/editar`} className="btn btn-pino">
            Editar
          </Link>
          <button type="button" className="btn btn-peligro" onClick={manejarEliminar}>
            Eliminar
          </button>
        </div>
      </div>
    </Container>
  )
}

export default DetalleTarea
